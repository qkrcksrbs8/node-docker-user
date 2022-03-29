'use strict';
const express = require('express'); // npm i express
const router = express();
const {userLogin} = require('../service/UserService');
const {getMessage} = require('../utils/pcgUtil');

router.get('/login', (req, res) => {
    console.log(req.originalUrl,);
    let result = userLogin(req);

    if (!result.code.startsWith('S')) return res.json({code:getMessage("P0001")});
    return res.json({code:getMessage(result.code, result.data)});
})

module.exports = router;