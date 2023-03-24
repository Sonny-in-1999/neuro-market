const express = require('express');
const {db} = require("../app.js");
const router = express.Router();
require("dotenv").config();

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

    db.collection('board').insertOne({
            postSort: req.body.sort,
            postTitle: req.body.title,
            postDetail: req.body.detail,
            postCreatedAt: now,
            postUpdatedAt: now,
            postLike: 0,
            postDislike: 0,
            postReported: 0,
        }, (error, result) => {
        if (error) throw error;
        console.log('게시글 등록 완료!')
        console.log(result);
        }
    );
    res.redirect('/board/community');
});
module.exports = router;
