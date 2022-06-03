const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Op } = require("sequelize");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const db = require('../../db/models');


//TO GET RESORTS - GET REQUEST to '/api/resorts/all
router.get('/all', asyncHandler(async (req, res, next) => {
    const resorts = await db.Resort.findAll();
    return res.json(resorts);
}));

//TO GET SPECIFIC RESORT - GET REQUEST to '/api/resorts/:id
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

//TO GET RESORTS OWNED BY SPECIFIC HOST - GET REQUEST to '/api/resorts/host/:id
router.get('/host/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const resort = await db.Resort.findAll({
        where: {
            host_id: id
        }
    });

    return res.json(resort);
}))
const oneDollar = 1;
const resortCreationValidation = [
    check('name')
        .exists({ checkFalsy: true})
        .withMessage('Resort name cannot be empty')
        .isLength({ min: 3})
        .withMessage('Resort Names are not usually less than 3 characters, please contact our support team if your resort name is'),
    check('price')
        .exists({ checkFalsy: true})
        .withMessage('Price cannot be empty'),
    check('capacity')
        .exists({ checkFalsy: true})
        .withMessage('Capacity cannot be empty'),
    check('details')
        .exists({ checkFalsy: true})
        .withMessage('Details cannot be empty'),
    check('city')
        .exists({ checkFalsy: true})
        .withMessage('City cannot be empty'),
    check('state')
        .exists({ checkFalsy: true})
        .withMessage('State cannot be empty'),
    check('latitude')
        .exists({ checkFalsy: true})
        .withMessage('Latitude cannot be empty')
        .isFloat()
        .withMessage('Please make sure it is in correct Latitude format'),
    check('longitude')
        .exists({ checkFalsy: true})
        .withMessage('Latitude cannot be empty')
        .isFloat()
        .withMessage('Please make sure it is in correct Longitude format'),
    check('image')
        .exists({ checkFalsy: true})
        .withMessage('Latitude cannot be empty'),
    handleValidationErrors
];

//TO CREATE A NEW RESORT - POST REQUEST to '/api/resorts/create
router.post('/create', resortCreationValidation, asyncHandler(async (req, res, next) => {
    const {name, price, capacity, details, city, state, latitude, longitude, image, id} = req.body;
    await db.Resort.create({
        name,
        price,
        capacity,
        details,
        city,
        state,
        host_id: id,
        longitude,
        latitude,
        imageUrl: image
    });
    const hostResorts = await db.Resort.findAll({
        where: {
            host_id: id
        }
    })
    return res.json(hostResorts);
}))

module.exports = router
