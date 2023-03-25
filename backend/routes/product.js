const express = require('express');
const {jwtVerify} = require("../token/jwtVerify");
const router = express.Router();

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
router.post('/post/upload', jwtVerify, (req, res, next) => {

    const user = req.user; // jwtVerify 를 통해 받은 user 를 const user 에 저장합니다.
    let now = new Date();

    db.collection('total').findOne({'name':'totalProduct'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 product 수가 저장된 데이터를 조회합니다
        .then(async response => {

            await db.collection('product').insertOne({ // product collection 에| productId 에는 총 product 수 +1만큼을 넣고, productDetail 을 넣습니다.
                _id: response.totalProduct + 1,
                userId: user.userId,
                userName: user.userName,
                tradeSort: req.body.tSort,
                tradeStatus: true,
                productSort: req.body.pSort,
                productName: req.body.pName,
                productPrice: req.body.pPrice,
                productDetail: req.body.pDetail,
                productCreatedAt: now,
                productUpdatedAt: now,
                productReported: 0
            }).then(() => console.log("Product Post Success.")).catch((err) => console.log(err))
            await db.collection('total').findOneAndUpdate({'name':'totalProduct'}, {$inc: {'totalProduct': 1}})
                // product 가 등록됐으므로, totalProduct 를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            // res.redirect('/');   // redirect -> 방금 올린 상품 페이지
        }).catch((err) => console.log(err))

});

module.exports = router;
