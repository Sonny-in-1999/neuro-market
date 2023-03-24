const express = require('express');
const router = express.Router();

/* GET user listing. */

router.get('/post', (req, res) => {

})
router.get('/:id/detail', (req, res, next) => {

});


/* Post user */
router.post('/post/upload', (req, res, next) => {
    db.collection('total').findOne({'name':'totalUser'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 유저수가 저장된 데이터를 조회합니다
        .then(async response => {
            await db.collection('user').insertOne({ // user collection 에| userId 에는 총 유저 수 +1만큼을 넣고, userDetail 을 넣습니다.
                _id: response.totalUser + 1,
                userLogin: req.body.login,
                userPw: req.body.pw,
                userName: req.body.name,
                userPhone: req.body.phone,
                userEmail: req.body.email,
                userGrade: req.body.grade,
                userReported: 0
            }).then(() => console.log("User Post Success.")).catch((err) => console.log(err))
            await db.collection('total').findOneAndUpdate({'name':'totalUser'}, {$inc: {'totalUser': 1}})    // 유저가 등록됐으므로, totalUser를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            res.redirect('/');  // redirect -> 홈페이지
        }).catch((err) => console.log(err))

});

module.exports = router;
