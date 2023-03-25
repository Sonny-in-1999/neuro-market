const express = require('express');
const {jwtVerify} = require("../token/jwtVerify");
const router = express.Router();

/* GET comment listing. */
router.get('/', (req, res, next) => {
    // CommentBoardPage
})

router.get('/comment/:board_id/post', (req, res, next) => {
    // 해당 board url 에 접속한 뒤, 댓글을 작성하는 페이지
})

/* POST comment. */
router.post('/comment/:board_id/post/upload', jwtVerify, async (req, res, next) => {

    const user = req.user;  // jwtVerify 를 통해 받은 user 를 const user 에 저장합니다.
    let now = new Date();


    db.collection('board').findOne({_id: '작성하려는 글의 고유 id 번호'})  // url 속 board_id를 가져오고 싶은데 방법을 모르겠음.
        .then( async (response) =>{
            const totalComment = response.totalComment;

            await db.collection('comment').insertOne({  // comment collection 에| commentId 에는 총 comment 수 +1만큼을 넣고, commentDetail 을 넣습니다.
                _id: totalComment + 1,
                boardId: "작성하려는 글의 고유 id 번호",
                userId: user.userId,
                userName: user.userName,
                commentDetail: req.body.cDetail,
                commentCreatedAt: now,
                commentUpdatedAt: now,
                commentReported: 0
            }).then(() => {
                console.log("Comment Post Success.");
                db.collection('board').findOneAndUpdate({_id: '작성하려는 글의 고유 id 번호'}, {$inc: {totalComment: 1}});
            }).catch((err) => console.log(err));
        });
});