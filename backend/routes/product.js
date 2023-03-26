const express = require('express');
const router = express.Router();
const {jwtVerify} = require("../token/jwtVerify");  /// JWT
////* cookie *////
const cookieParser = require('cookie-parser');
router.use(cookieParser()); // 이 라우터의 모든 path 가 cookie 에 접근할 수 있도록 합니다.

/* GET product listing. */
router.get('/keyboard', async (req, res) => {
    const keyboards = db.get('product').filter({'productSort': "keyboard"}).value();    // product collection 안의 productSort field 값을 이용하여 데이터를 선별추출합니다.
    res.json(keyboards);    // 선별추출한 데이터를 json 파일 형태로 전송합니다. 이미 get 메소드가 데이터를 선별을 했으므로, client 쪽에서 데이터를 구분할 필요 없이 출력하면 됩니다.
});

router.get('/keycap', (req, res) => {
    const keycaps = db.get('product').filter({'productSort': "keycap"}).value();
    res.json(keycaps);
});

router.get('/artisan', (req, res) => {
    const artisans = db.get('product').filter({'productSort': "artisan"}).value();
    res.json(artisans);
});

router.get('/etc', (req, res) => {
    const etcs = db.get('product').filter({'productSort': "etc"}).value();
    res.json(etcs);
});

router.get('/post', (req, res) => {

});

/* POST product listing. */
router.post('/post/upload', jwtVerify, async (req, res, next) => {

    const userId = await req.userId; // jwtVerify(로그인)을 통해 받은 userId 를 const userId 에 저장합니다.

    db.collection('user').findOne({'_id': userId}).then(async response => {

        let now = new Date();
        const user = response;  // 저장한 userId 로 해당 회원의 정보를 불러들여 user 에 저장합니다.

        if (user != undefined || user != null) {    // 저장된 user 의 정보가 없으면 err
            db.collection('total').findOne({'name': 'totalProduct'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 product 수가 저장된 데이터를 조회합니다
                .then(async response => {

                    const product = await db.collection('product').insertOne({ // product collection 에| productId 에는 총 product 수 +1만큼을 넣고, productDetail 을 넣습니다.
                        _id: response.totalProduct + 1,
                        userId: user._id,    // 아까 user 로 저장한 회원의 정보를 상품에 넣습니다.
                        userName: user.userName,
                        tradeSort: req.body.tSort,
                        tradeStatus: true,
                        productSort: req.body.pSort,
                        productName: req.body.pName,
                        productPrice: parseInt(req.body.pPrice),
                        productDetail: req.body.pDetail,
                        productCreatedAt: now,
                        productUpdatedAt: now,
                        productReported: 0
                    }).then(() => {
                        console.log("Product Post Success.")
                        const productId = product.insertedId;
                        db.collection('total').findOneAndUpdate({'name': 'totalProduct'}, {$inc: {'totalProduct': 1}})
                            // product 가 등록됐으므로, totalProduct 를 1 증가시킵니다.
                            .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
                        res.redirect(`/product/${productId}`);  // 방금 올린 상품으로 리다이렉트
                    }).catch((err) => console.log(err))
                }).catch((err) => console.log(err))

        } else {
            return res.status(403).json({message: 'Authentication failed: token invalid'})
            // 오류 메세지로 403을 출력하는게 맞는지 모르겠습니다. 토큰이 만료된 경우 외에 유저를 찾을 수 없을 리가 없다 생각합니다
        }
    })
})
module.exports = router;
