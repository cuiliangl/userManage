/**
 * @file 路由配置
 * @author cuiliang
 * @since 2018.10.17
 */

const express = require('express');

// 创建路由容器
const router = express.Router();

const register = require('../controller/register');
const login = require('../controller/login');
const userList = require('../controller/user/userList');
const addUser = require('../controller/user/addUser');
const renderEdit = require('../controller/user/renderEdit');
const editInfo = require('../controller/user/editInfo');
const deleteUser = require('../controller/user/deleteUser');
const signOut = require('../controller/signOut');

router
    .get('/', (req, res) => {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        userList(req, res);
    })
    .get('/login', (req, res) => {
        res.render('login/login.html');
    })
    .post('/login', (req, res) => {
        login(req, res);
    })
    .get('/register', (req, res) => {
        res.render('register/register.html');
    })
    .post('/register', (req, res) => {
        register(req, res);
    })
    .get('/signout', (req, res) => {
        signOut(req, res);
    })
    .get('/user/add', (req, res) => {
        res.render('user/add.html', {
            user: req.session.user
        });
    })
    .post('/user/add', (req, res) => {
        addUser(req, res);
    })
    .get('/user/edit', (req, res) => {
        renderEdit(req, res);
    })
    .post('/user/edit', (req, res) => {
        editInfo(req, res);
    })
    .get('/user/delete', (req, res) => {
        deleteUser(req, res);
    })

module.exports = router;
