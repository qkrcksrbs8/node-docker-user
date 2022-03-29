'use strict';
const express = require('express'); // npm i express
const router = express();
const {userLogin} = require('../service/UserService');
const {getMessage} = require('../utils/pcgUtil');
const apiMapping = require('../config/apiMappingConfig');
const commRouter = (req, apiName) => {
    try {
        let mappings = apiMapping[apiName];
        let preService = require(mappings.path);
        preService.pre(req);
        let result = preService.post(req);
        return getMessage("S0001", result);
    }
    catch (e) {

    }
}

router.get('/login', (req, res) => {
    console.log(req.originalUrl,);
    let result = userLogin(req);

    commRouter(req, "login");

    if (!result.code.startsWith('S')) return res.json({code:getMessage("P0001")});
    return res.json({code:getMessage(result.code, result.data)});
})

module.exports = router;