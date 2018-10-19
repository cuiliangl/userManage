/**
 * @file 编辑接口
 * @author cuiliang
 * @since 2018.10.19
 */

const {UserManage} = require('../../database');

module.exports = (req, res) => {
    UserManage.findByIdAndUpdate(req.body.id.replace(/\"/g, ''), req.body, (err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        })

        res.status(200).json({
            code: 0,
            msg: 'success'
        })
    })
}
