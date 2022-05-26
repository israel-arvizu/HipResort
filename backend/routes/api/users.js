const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();

//TO SIGN UP - POST REQUEST to '/api/users/sign-up'
router.post('/sign-up', asyncHandler(async (req, res) => {
    const {email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
        user
    });
}))


module.exports = router;
