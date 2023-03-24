const express = require('express');
const router = express.Router();

/* GET board listing. */
router.get('/community', (req, res) => {

});

router.get('/notice', (req, res) => {

});

router.get('/community/post', (req, res) => {

})


/*POST board listing.*/
router.post('/community/post/upload', (req, res) => {

    let now = new Date();

    db.collection('total').findOne({'name': 'totalBoard'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 Board 수가 저장된 데이터를 조회합니다
        .then(async response => {
            await db.collection('board').insertOne({
                    _id: response.totalBoard + 1,
                    boardSort: req.body.bSort,
                    boardTitle: req.body.bTitle,
                    boardDetail: req.body.bDetail,
                    boardCreatedAt: now,
                    boardUpdatedAt: now,
                    boardLike: 0,
                    boardDislike: 0,
                    boardReported: 0,
                }, (error, result) => {
                    if (error) throw error;
                    console.log('게시글 등록 완료!')   // console.log 작동 하나요? 확인 필요합니다.
                    console.log(result);
                }
            );
            await db.collection('total').findOneAndUpdate({'name': 'totalBoard'}, {$inc: {'totalBoard': 1}})    // 게시물이 등록됐으므로, totalBoard 를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            res.redirect('/board/community/:id');   // redirect -> 방금 쓴 글
        });
});

module.exports = router;
