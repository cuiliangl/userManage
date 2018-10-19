/**
 * @file 删除用户
 * @author cuiliang
 * @since 2018.10.19
 */

const {UserManage} = require('../../database');

module.exports = (req, res) => {
    UserManage.findByIdAndRemove(req.query.id.replace(/\"/g, ''), (err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        })

        res.redirect('/');
    })
}