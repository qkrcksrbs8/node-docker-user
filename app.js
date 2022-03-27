const express = require('express'); // npm i express
const router = express();
// api npm // npm i axios

const bodyParser = require("body-parser"); // npm i body-parser
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const user = require('./src/router/userRouter');

router.use('/user', user);

//포트 연결
router.listen(9001,()=>console.log(`http://localhost:9001`));