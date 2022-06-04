const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')
const { Op } = require("sequelize");
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const db = require('../../db/models');
const { Resort } = require('../../db/models')


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
    console.log('create ROute')
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

//TO EDIT A EXISTING RESORT - PUT REQUEST to '/api/resorts/edit
router.put('/edit', asyncHandler(async (req, res, next) => {
    console.log('edit route')
    const {resortId, name, price, capacity, details, city, state, latitude, longitude, imageUrl, id} = req.body;
    console.log('This is latitude', latitude, "this is longitude", longitude)
    const resort = await db.Resort.findByPk(resortId);
    if(!resort) return res.errors('Couldnt find requested resort');

    if(id === resort.host_id){
        resort.name = name;
        resort.price = price;
        resort.capacity = capacity;
        resort.details = details;
        resort.city = city;
        resort.state = state;
        resort.latitude = latitude;
        resort.longitude = longitude;
        resort.imageUrl = imageUrl;
        await resort.save();
    }

    const hostResorts = await db.Resort.findAll({
        where: {
            host_id: id
        }
    })
    return res.json(hostResorts)
}))

//TO DELETE A RESORT - DELETE REQUEST to '/api/resorts/delete
router.delete('/delete', asyncHandler(async (req, res, next) => {
    const {resortId, userId} = req.body;
    const resort = await Resort.findByPk(resortId)

    if(resort && userId === resort.host_id){
        await resort.destroy();
        const hostResorts = await db.Resort.findAll({
            where: {
                host_id: userId
            }
        })
        return res.json(hostResorts);
    }
    return res.error('Error - Couldnt Find Resort');
}))

module.exports = router
