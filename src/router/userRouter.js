'use strict';
const express = require('express'); // npm i express
const router = express();
const {getMessage, isErrorCode, getErrorCode} = require('../utils/pcgUtil');
const apiMapping = require('../config/apiMappingConfig');

const commRouter = async (req, apiName) => {
    try {
        let mappings = apiMapping[apiName];
        let service = require(mappings.path);
        if (null == service) throw new Error("E1000");
        service.pre(req);
        return getMessage("S0001", await service.post());
    }
    catch (e) {
        if (isErrorCode(e)) return getMessage(getErrorCode(e));
        return getMessage("E0001");
    }
}

// 로그인
router.get('/login', async (req, res) => {
    return res.json(await commRouter(req, "login"));
})

module.exports = router;