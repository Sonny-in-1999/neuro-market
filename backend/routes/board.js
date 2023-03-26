const express = require('express');
const router = express.Router();
const {jwtVerify} = require("../token/jwtVerify");  // JWT
////* cookie *////
const cookieParser = require('cookie-parser');
router.use(cookieParser()); // 이 라우터의 모든 path 가 cookie 에 접근할 수 있도록 합니다.

/* GET board listing. */

router.get('/:boardId', (req, res, next) => {
    //
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
router.post('/post/upload', jwtVerify, async (req, res)  => {

    const userId = await req.userId; // jwtVerify(로그인)을 통해 받은 userId 를 const userId 에 저장합니다.

    db.collection('user').findOne({'_id': userId}).then(async response => {

        let now = new Date();
        const user = response;  // 저장한 userId 로 해당 회원의 정보를 불러들여 user 에 저장합니다.

        if (user != undefined || user != null) {    // 저장된 user 의 정보가 없으면 err
            db.collection('total').findOne({'name': 'totalBoard'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 board 수가 저장된 데이터를 조회합니다
                .then(async response => {

                    const board = await db.collection('board').insertOne({ // board collection 에| boardId 에는 총 board 수 +1만큼을 넣고, boardDetail 을 넣습니다.
                        _id: response.totalBoard + 1,
                        userId: user._id,
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
                    }).then(() => {
                        console.log("Board Post Success.")
                        const boardId = board.insertedId;
                        db.collection('total').findOneAndUpdate({'name': 'totalBoard'}, {$inc: {'totalBoard': 1}})
                            // board 가 등록됐으므로, totalBoard 를 1 증가시킵니다.
                            .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
                        res.redirect(`/board/${boardId}`)   // 방금 올린 게시물로 리다이렉트
                    }).catch((err) => console.log(err))

                }).catch((err) => console.log(err))
        } else {
            return res.status(403).json({message: 'Authentication failed: token invalid'})
            // 오류 메세지로 403을 출력하는게 맞는지 모르겠습니다. 토큰이 만료된 경우 외에 유저를 찾을 수 없을 리가 없다 생각합니다
        }
    })
})

module.exports = router;
