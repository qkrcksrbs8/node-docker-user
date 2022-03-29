'use strict';
const messageConfig = require('../config/messageConfig');
const getMessage = (code, data) => {
    if (!code) code = "E001";
    if (!data) data = {};
    return {
        resultMessage: messageConfig.data[code]
        ,resultCode: code
        ,data
    }
}

module.exports = {
    getMessage,
}