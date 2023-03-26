const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

function jwtVerify (req, res, next) {

    cookieParser()(req, res, () => {

        if (req.headers.cookie == undefined) { // cookie 가 제대로 req.headers 에 전달 됐는지 확인합니다.
        } else {

            const accessToken = req.cookies.accessToken; // cookieParser 로 쿠키에 넣어 놓은 accessToken 을 받아옵니다

            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {    // 검증 과정으로 디코드한 결과물 = decoded = 유저 데이터
                req.userId = decoded.userId; // user collection 의 _id 데이터를 req 헤더에 담습니다.
                next(); // 헤더를 사용하여 정보에 액세스하게 해주고, 다음 함수에게 제어권을 넘깁니다.

                if (err) {
                    return res.status(403).json({message: 'Authentication failed: token invalid'});
                }
            });

            if (!accessToken) {
                return res.status(401).json({message: 'Authentication failed: token missing'});
            }
        }
    })
}
module.exports = { jwtVerify };