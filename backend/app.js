const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const {enviorment} = require('./config');
const isProduction = enviorment === 'production';
const router = require('./routes');

const app = express();
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.json());

if(!isProduction){
    app.use(cors());
}

app.use(
    helmet.crossOriginResourcePolicy({
      policy: "cross-origin"
    })
  );

app.use(
    csurf({
        cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true
        }
    })
);

app.use(router);
const apiRouter = require('./routes/api');
router.use('/api', apiRouter)


module.exports = app;
