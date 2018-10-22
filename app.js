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
const session = require('express-session');

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

// session 配置
app.use(session({
    // 配置加密字符串，会在原有加密的基础上，拼接起来加密，目的是防止客户端恶意篡改，提高安全性
    secret: 'keyboard cat',
    resave: false,
    // 无论是否需要 session，默认给客户端分配session，如果设置成false，只有设置了session的时候才会给客户端分配session
    saveUninitialized: true
}))

// session默认是内存存储的，服务器一旦重启就会丢失，真正的生产环境session是持久化存储。


// 一定要放在最后
app.use(router);

app.listen(3000, () => {
    console.log('runing...')
})
