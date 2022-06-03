const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Op } = require("sequelize");

const db = require('../../db/models');

//TO GET RESORTS - GET REQUEST to '/api/resorts/all
router.get('/all', asyncHandler(async (req, res, next) => {
    const resorts = await db.Resort.findAll();
    return res.json(resorts);
}));

router.get('/:id(\\d+)', asyncHandler( async (req,res, next) => {
    const resort = await db.Resort.findByPk(req.params.id);
    if(!resort) return res.json('ERROR');

    const host = await db.User.findByPk(resort.host_id);
    const amenities = await db.Amenities.findAll({
        where:{
                resortId: req.params.id
        }
     });

    const ResortandHost = {};
    ResortandHost.resort = resort;
    ResortandHost.host = host;
    ResortandHost.amenities = amenities;

    return res.json(ResortandHost)
}));

router.get('/host/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const resort = await db.Resort.findAll({
        where: {
            host_id: id
        }
    });

    return res.json(resort);
}))
module.exports = router
