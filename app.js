/**
 * @file 入口文件
 * @author cuiliang
 * @since 2018.10.17
 */

// 核心模块
const express = require('express');
const path = require('path');

// 中间件
const bodyParser = require('body-parser');

const app = express();

// 自定义模块
const router = require('./routes');

// 处理静态资源
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));


// 模板引擎配置
app.engine('html', require('express-art-template'));
app.set('view options', {
    debug: process.env.NODE_ENV !== 'production'
});

// body-parser配置
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// 一定要放在最后
app.use(router);

app.listen(3000, () => {
    console.log('runing...')
})
