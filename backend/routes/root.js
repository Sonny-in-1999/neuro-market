const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

});

/* JWT Sign */
router.post('/login', async (req, res, next) => {

    console.log("REST API Post Method - User Login & JWT Sign");

    const {userId, userPw} = req.body
    const users = db.collection('user')

    let userItem = users.find(object => object._id == userId);
    if (userItem != null) {
        if (userItem.password == userPw) {
            try {
                const accessToken = await new Promise((resolve, reject) => {
                    jwt.sign({
                            userId : userItem.id,
                            userName : userItem.name
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        {
                            expiresIn : '1h'
                        },
                        (err, token) => {
                            if (err) {
                                reject(err);
                            } else {
                                resolve(token);
                            }
                        });
                });
                res.json({success:true, accessToken:accessToken});
            } catch(err) {
                console.log(err);
                res.status(401).json({success:false, errormessage:'token sign fail'});
            }
        } else {
            res.status(401).json({success:false, errormessage:'id and password are not identical'});
        }
    } else {
        res.status(401).json({success:false, errormessage:'id and password are not identical'});
    }
});

module.exports = router;
