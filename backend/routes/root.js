const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');    /// JWT

/* GET home page. */
router.get('/', function(req, res) {
    // homepage
});

/* JWT Sign */
router.post('/login', async (req, res, next) => {

    console.log("REST API Post Method - User Login & JWT Sign");

    const {uLogin, uPw} = req.body    // req = 로그인 시 받은 정보

    db.collection('user').findOne({'userLogin': uLogin}, {'userPw': uPw}).then( async response => {   // 로그인 시 받은 정보 = DB 속 정보이면 result 에 id를 추출

        const uId = response._id; // frontend 에서 제공한 정보(로그인 정보)로 얻은 것이므로, 명명을 uId로 합니다.

        if (uId != undefined || uId != null) {
            try {
                const accessToken = await new Promise((resolve, reject) => {
                    jwt.sign({
                            userId: uId,    // userId에 uId를 담음으로써, backend 를 거친 정보임을 나타냅니다.
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        {
                            expiresIn: '1h'
                        },
                        (err, token) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(token);
                            }
                        });
                });
                res.cookie('accessToken', accessToken, {path: '/', maxAge: 3600000, httpOnly: true});   // 회원 액세스 토큰 지속시간 1시간(3600000)
                res.send();
            } catch (err) {
                console.log(err);
                res.status(401).json({success: false, errormessage: '토큰 인증 실패'});
            }
        } else {    // 로그인 시 받은 정보 = null 또는 undefined(일치 정보 없음)인 경우 오류 출력
            res.status(401).json({success: false, errormessage: '아이디와 비밀번호가 다릅니다.'});
        }
    });
});

module.exports = router;
