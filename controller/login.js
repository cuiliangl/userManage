/**
 * @file 登录
 * @author cuiliang
 * @since 2018.10.18
 */

const md5 = require('md5');
const {UserInfo} = require('../database');

module.exports = (req, res) => {
    let password = req.body.password;

    req.body.password = md5(md5(password) + 'userManage');

    UserInfo.findOne(req.body, (err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务器错误'
        })

        if (data) {
            // 设置 session
            req.session.user = data;
            return res.redirect('/');
        }

        res.render('login/login.html', {
            warnMess: '邮箱或密码错误'
        })
    })
}
