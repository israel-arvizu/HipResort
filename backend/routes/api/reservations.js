const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Reservation } = require('../../db/models');

// TO MAKE RESERVATION - POST REQUEST TO /api/reservation
router.post('/', asyncHandler(async (req, res, next) => {
    const {userId, resortId, startDate, endDate, confirmationNumber} = req.body;
    const reservation = await Reservation.create({
        userId,
        resortId,
        startDate,
        endDate,
        confirmationNumber
    });
    return res.json({
        reservation
    })
}))

module.exports = router;
