const jwt = require('jsonwebtoken');


function jwtVerify (req, res, next) {
    const token = req.headers['userToken'];

    if (!token) {
        return res.status(401).json({ message: 'Authentication failed: token missing' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Authentication failed: token invalid' });
        }
        req.user = decoded;
        next(); // req.user 를 사용하여 정보에 액세스하게 해주고, 다음 함수에게 제어권을 넘깁니다.
    });
}

module.exports = { jwtVerify };