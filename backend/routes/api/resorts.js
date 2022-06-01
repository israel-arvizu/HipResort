const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler')

const db = require('../../db/models');

//TO GET RESORTS - GET REQUEST to '/api/resorts/all
router.get('/all', asyncHandler(async (req, res, next) => {
    const resorts = await db.Resort.findAll();
    return res.json(resorts);
}))

module.exports = router
