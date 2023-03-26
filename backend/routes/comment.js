const express = require('express');
const {jwtVerify} = require("../token/jwtVerify");
const router = express.Router();

/* GET comment listing. */
router.get('/', (req, res, next) => {
    // CommentBoardPage
})

router.get('/:board_id/comment/post', (req, res, next) => {
    // 해당 board url 에 접속한 뒤, 댓글을 작성하는 페이지
})

/* POST comment. */

router.post('/:board_id/comment/post/upload', jwtVerify, async (req, res, next) => {

    const boardId = parseInt(req.params.board_id);
    const user = req.user; // Save the user received through jwtVerify to const user.
    let now = new Date();

    db.collection('board').findOne({_id: boardId})
        .then(async (response) => {
            const totalComment = response.totalComment;

            await db.collection('comment').insertOne({
                _id: totalComment + 1,
                boardId: boardId,
                userId: user.userId,
                userName: user.userName,
                commentDetail: req.body.cDetail,
                commentCreatedAt: now,
                commentUpdatedAt: now,
                commentReported: 0
            }).then(() => {
                console.log("Comment Post Success.");
                db.collection('board').findOneAndUpdate({_id: boardId}, {$inc: {totalComment: 1}});
            }).catch((err) => console.log(err));
        });
});