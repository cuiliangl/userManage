/**
 * @file 渲染编辑页面
 * @author cuiliang
 * @since 2018.10.19
 */

const {UserManage} = require('../../database');

module.exports = (req, res) => {
    UserManage.findById(req.query.id.replace(/\"/g, ''), (err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        })

        res.render('user/edit.html', {
            userInfo: data
        })
    })
}
