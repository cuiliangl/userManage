/**
 * @file 登录
 * @author cuiliang
 * @since 2018.10.18
 */

const {UserInfo} = require('../database');

module.exports = (req, res) => {
    UserInfo.findOne(req.body, (err, data) => {
        if (err) return res.status(500).json({
            code: 0,
            msg: '服务器错误'
        })

        if (data) return res.redirect('/');

        res.render('login/login.html', {
            warnMess: '邮箱或密码错误'
        })
    })
}
