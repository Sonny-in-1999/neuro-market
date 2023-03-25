const express = require('express');
const {jwtVerify} = require("../token/jwtVerify");
const router = express.Router();

/* GET board listing. */

router.get('/:id', (req, res, next) => {

})

router.get('/notice', (req, res) => {
    const notices = db.get('board').filter({'boardSort': "notice"}).value();    // board collection 안의 boardSort field 값을 이용하여 데이터를 선별추출합니다.
    res.json(notices);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/community', (req, res) => {
    const communities = db.get('board').reject({'boardSort': "notice"}).value();    // notice 를 제외한 모든 boardSort 를 불러옵니다.
    res.json(communities);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/community/general', (req, res) => {
    const generals = db.get('board').filter({'boardSort': "general"}).value();    // board collection 안의 boardSort field 값을 이용하여 데이터를 선별추출합니다.
    res.json(generals);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/community/tipnreview', (req, res) => {
    const tipnreviews = db.get('board').filter({'boardSort': "tipnreview"}).value();    // board collection 안의 boardSort field 값을 이용하여 데이터를 선별추출합니다.
    res.json(tipnreviews);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/community/general', (req, res) => {
    const giveaways = db.get('board').filter({'boardSort': "giveaway"}).value();    // board collection 안의 boardSort field 값을 이용하여 데이터를 선별추출합니다.
    res.json(giveaways);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/post', (req, res) => {

})


/*POST board listing.*/
router.post('/post/upload', jwtVerify, (req, res)  => {

    const user = req.user; // jwtVerify 를 통해 받은 user 를 const user 에 저장합니다.
    let now = new Date();

    db.collection('total').findOne({'name': 'totalBoard'}).then( async (response) => { // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 Board 수가 저장된 데이터를 조회합니다

        const totalBoard = response.totalBoard

        await db.collection('board').insertOne({
            _id: totalBoard + 1,
            userId: user.userId,
            userName: user.userName,
            boardSort: req.body.bSort,
            boardTitle: req.body.bTitle,
            boardDetail: req.body.bDetail,
            boardCreatedAt: now,
            boardUpdatedAt: now,
            boardLike: 0,
            boardDislike: 0,
            boardReported: 0,
            totalComment: 0,
            }, (error, result) => {
            if (error) throw error;
            console.log('게시글 등록 완료!')   // console.log 작동 하나요? 확인 필요합니다.
                console.log(result);
        });
        await db.collection('total').findOneAndUpdate({'name': 'totalBoard'}, {$inc: {'totalBoard': 1}})    // 게시물이 등록됐으므로, totalBoard 를 1 증가시킵니다.
            .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
        res.redirect('/board/community/:id');   // redirect -> 방금 쓴 글
            });
})

module.exports = router;
