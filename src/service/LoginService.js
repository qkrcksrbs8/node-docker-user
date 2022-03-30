const userVO = require("../vo/userVO");
const data = {};
const pre = (req) => {
    console.log('로그인 전처리 호출');
    // let id = req.query.id;
    // let pw = req.query.pw;
    let id = req.body.id;
    let pw = req.body.pw;
    if (!id || !pw) throw new Error("P0002");
    data.id = id;
    data.pw = pw;
}

const post = () => {
    console.log('로그인 후처리 호출');
    let userName;
    for (let i = 0; i < userVO.data.length; i++)
        if (userVO.data[i].id == data.id && userVO.data[i].pw == data.pw) userName = userVO.data[i].name;

    if (!userName) throw new Error("P0001");
    return userName;// 정상 처리되었다는 뜻
}

module.exports = {
    pre
    ,post
}