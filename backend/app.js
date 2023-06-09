const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');
const boardRouter = require('./routes/board')
const productRouter = require('./routes/product');
const commentRouter = require('./routes/comment');

const app = express();
require("dotenv").config();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static('public')); // 빌드된 Vue.js 앱의 정적 파일 제공

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html'); // 모든 URL 에서 index.html 정적 파일로 응답
});

const port = process.env.PORT || 3000;
const MongoClient = require('mongodb').MongoClient;
MongoClient.connect(process.env.DB_URL)
    .then(r => {
        app.listen(port, () => console.log(`App listening on port ${port}`))
        global.db = r.db('neurotoxin'); // global DB 설정을 통해, require 없이 router 에서 db를 불러올 수 있습니다.
        console.log("DB connected");
    }).catch(err => console.log(err));


app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/board', boardRouter);
app.use('/product', productRouter);
app.use('/comment', commentRouter);

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app

