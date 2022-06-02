const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');
const { Reservation } = require('../../db/models');

// TO MAKE RESERVATION - POST REQUEST TO '/api/reservation'
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


// TO GET ALL RESERVATIONS FROM A USER - GET REQUEST TO '/api/reservation/user/:id'
router.get('/user/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const reservations = await db.Reservation.findAll({
        where: {
            userId: id
        }
    });
    return res.json(reservations)

}))

//DELETE RESERVATION - DELETE REQUEST TO '/api/reservation
router.delete('/', asyncHandler(async (req, res) => {
    const {resortId, userId, confirmationNumber} = req.body;
    const reservation = await db.Reservation.findOne({
        where: {
            userId: userId,
            resortId: resortId,
            confirmationNumber: confirmationNumber
        }
    });

    if(reservation){
        await reservation.destroy();
        const reservations = await db.Reservation.findAll({
            where: {
                userId: userId
            }
        });
        return res.json(reservations)
    }
    return res.error("ERROR COULND DESTROY");
}))

module.exports = router;
