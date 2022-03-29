const pre = (req) => {
    console.log('로그인 전처리 호출');
}

const post = (req) => {
    console.log('로그인 후처리 호출');
    return {"name": "찬찬몬"};
}

module.exports = {
    pre
    ,post
}