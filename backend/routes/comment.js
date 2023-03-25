const express = require('express');
const router = express.Router();

/* GET product listing. */
router.get('/', (req, res, next) => {

})

router.get('/comment/:board_id/post', (req, res, next) => {

})

/* POST product listing. */
router.post('/comment/:board_id/post/upload', (req, res, next) => {

    let now = new Date();

    db.collection('total').findOne({'name': 'totalComment'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 comment 수가 저장된 데이터를 조회합니다
        .then(async response => {

            const user = await db.collection('user').findOne({_id: req.body.userId});   // req.body.userId를, Login 메소드를 이용해서 로그인 된 회원 정보를 받아야합니다.
            const board = await db.collection('board').findOne({_id: req.body.boardId}); // req.body.boardId를, 작성하려는 댓글이 있는 글의 id로 바꿔야합니다.

            await db.collection('comment').insertOne({ // comment collection 에| commentId 에는 총 comment 수 +1만큼을 넣고, commentDetail 을 넣습니다.
                _id: response.totalComment + 1,
                boardId: board._id,
                userId: req.body.userId,
                userName: user.userName,
                commentDetail: req.body.cDetail,
                commentCreatedAt: now,
                commentUpdatedAt: now,
                commentReported: 0
            }).then(() => console.log("Product Post Success.")).catch((err) => console.log(err))
            await db.collection('total').findOneAndUpdate({'name':'totalComment'}, {$inc: {'totalComment': 1}})
                // comment 가 등록됐으므로, totalProduct 를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            // res.redirect('/');   // redirect -> 방금 올린 상품 페이지
        }).catch((err) => console.log(err))

});