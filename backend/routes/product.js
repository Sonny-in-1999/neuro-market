const express = require('express');
const router = express.Router();

/* GET product listing. */
router.get('/keyboard', (req, res) => {

});

router.get('/keycap', (req, res) => {

});

router.get('/artisan', (req, res) => {

});

router.get('/etc', (req, res) => {

});

router.get('/post', (req, res) => {

});

/* POST product listing. */
router.post('/post/upload', (req, res, next) => {

    let now = new Date();

    db.collection('total').findOne({'name':'totalProduct'})    // 총 등록된 수 기록을 위한 collection 인 total 에서, 총 product 수가 저장된 데이터를 조회합니다
        .then(async response => {
            await db.collection('product').insertOne({ // product collection 에| productId 에는 총 product 수 +1만큼을 넣고, productDetail 을 넣습니다.
                _id: response.totalProduct + 1,
                tradeSort: req.body.tSort,
                tradeStatus: true,
                productSort: req.body.pSort,
                productName: req.body.pName,
                productPrice: req.body.pPrice,
                productDetail: req.body.pDetail,
                productCreated: now,
                productUpdated: now,
                productReported: 0
            }).then(() => console.log("Product Post Success.")).catch((err) => console.log(err))
            await db.collection('total').findOneAndUpdate({'name':'totalProduct'}, {$inc: {'totalProduct': 1}})
                // product 가 등록됐으므로, totalProduct 를 1 증가시킵니다.
                .then(() => console.log("Total Incremented Success")).catch((err) => console.log(err))
            // res.redirect('/');   // redirect -> 방금 올린 상품 페이지
        }).catch((err) => console.log(err))

});

module.exports = router;
