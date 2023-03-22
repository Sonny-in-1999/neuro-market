const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/event', (req, res) => {
    res.render('index');
});

router.get('/community', (req, res) => {
    res.render('index');
});

router.get('/notice', (req, res) => {
    res.render('index');
});


module.exports = router;
