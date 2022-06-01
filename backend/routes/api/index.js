const router = require('express').Router();
const sessionRouter = require('./sessions.js');
const usersRouter = require('./users.js');
const resortRouter = require('./resorts.js')

const asyncHandler = require('express-async-handler');
const { setTokenCookie } = require('../../utils/auth');
const { User } = require('../../db/models');
const { restoreUser } = require('../../utils/auth.js');
const { requireAuth } = require('../../utils/auth.js');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/resorts', resortRouter);


router.get('/set-token-cookie', asyncHandler(async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        }
    });
    setTokenCookie(res, user);
    return res.json({ user });
}))

router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        if(req.user){
            res.json(req.user);
        }else
        res.json('No User Token found')
    }
  );

router.get('/require-auth', requireAuth, (req, res) => {
        return res.json(req.user);
    }
);

module.exports = router;
