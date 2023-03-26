const express = require('express');
const router = express.Router();
////* JWT *////
const {jwtVerify} = require("../token/jwtVerify");
const jwt = require("jsonwebtoken");
////* cookie *////
const cookieParser = require('cookie-parser');
router.use(cookieParser()); // 이 라우터의 모든 path 가 cookie 에 접근할 수 있도록 합니다.

/* GET user listing. */

router.get('/post', (req, res) => {

})

router.get('/user', jwtVerify, async (req, res, next) => {

    const userId = await req.userId; // jwtVerify(로그인)을 통해 받은 userId 를 const userId 에 저장합니다.

    try {
        const user = await db.collection('user').findOne({ _id: userId });  // 재설정한 userId를 토대로 db 에서 데이터를 추출합니다.
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.json(user);
    } catch (err) {
        next(err);
    }
});

/* Post user */
router.post('/post/upload', (req, res, next) => {

    db.collection('total').findOne({'name':'totalUser'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 유저수가 저장된 데이터를 조회합니다
        .then(async response => {
            const user = {  // user declare for using const user, in token declare
                _id: response.totalUser + 1,
                userLogin: req.body.uLogin,
                userPw: req.body.uPw,
                userName: req.body.uName,
                userPhone: req.body.uPhone,
                userEmail: req.body.uEmail,
                userGrade: req.body.uGrade,
                userReported: 0
            };

            const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);  // user Secret Token

            await db.collection('user').insertOne({ // user collection 에| userId 에는 총 유저 수 +1만큼을 넣고, userDetail 을 넣습니다.
                _id: response.totalUser + 1,
                userLogin: req.body.uLogin,
                userPw: req.body.uPw,
                userToken: token,
                userName: req.body.uName,
                userPhone: req.body.uPhone,
                userEmail: req.body.uEmail,
                userGrade: req.body.uGrade,
                userReported: 0
            }).then(() => {
                console.log("User Post Success")
            }).catch((err) => console.log(err))
            await db.collection('total').findOneAndUpdate({'name':'totalUser'}, {$inc: {'totalUser': 1}})    // 유저가 등록됐으므로, totalUser 를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            res.redirect('/');  // redirect -> 홈페이지
        }).catch((err) => console.log(err))

});

module.exports = router;
