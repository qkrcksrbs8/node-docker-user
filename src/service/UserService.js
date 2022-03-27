'use strict';
const userVO = require('../vo/userVO');

const userLogin = (req) => {
    let id = req.query.id;
    let pw = req.query.pw;
    if (!id || !pw) return {'code':'P0001', 'message': '계정 정보를 확인해주세요.'};// 로그인 정보 다시 입력하라는 뜻
    let userName;
    for (let i = 0; i < userVO.data.length; i++) {
        if (userVO.data[i].id == id && userVO.data[i].pw == pw) userName = userVO.data[i].name;
    }
    if (!userName) return {'code':'P0001', 'message': '계정 정보를 확인해주세요.'};// 로그인 정보 다시 입력하라는 뜻
    return {'code': 'S0001', 'message': '정상 처리되었습니다.', 'data': {name:userName}};// 정상 처리되었다는 뜻
}
module.exports = {
    userLogin
}
