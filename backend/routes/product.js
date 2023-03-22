var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/keyboard', (req, res) => {
    res.render('index');
});

router.get('/keycap', (req, res) => {
    res.render('index');
});

router.get('/artisan', (req, res) => {
    res.render('index');
});

router.get('/etc', (req, res) => {
    res.render('index');
});

module.exports = router;
