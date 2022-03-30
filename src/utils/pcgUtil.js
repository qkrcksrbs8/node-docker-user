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

const isErrorCode = (e) => {
    let code = e.message;
    return (code != null && code.length == 5)
}

const getErrorCode = (e) => {
    return e.code != null ? e.code : e.message;
}

module.exports = {
      getMessage
    , isErrorCode
    , getErrorCode
}