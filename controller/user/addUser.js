/**
 * @file 新增用户
 * @author cuiliang
 * @since 2018.10.19
 */

const {UserManage} = require('../../database');

module.exports = (req, res) => {
    console.log(req.body);

    new UserManage(req.body).save((err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        })

        return res.status(200).json({
            code: 0,
            msg: 'ok'
        })
    })
}
