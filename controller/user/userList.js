/**
 * @file 用户列表
 * @author cuiliang
 * @since 2018.10.19
 */

const {UserManage} = require('../../database');

module.exports = (req, res) => {
    UserManage.find((err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        })

        console.log(data);

        res.render('user/list.html', {
            userList: data
        });
    })
}
