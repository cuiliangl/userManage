/**
 * @file 注册逻辑
 * @author cuiliang
 * @since 2018.10.17
 */

const {UserInfo} = require('../database');

// 注册业务逻辑
module.exports = (req, res) => {
    let {email, nickName} = req.body;

    // 查找是否有相同邮箱或者用户名
    UserInfo.findOne({
        $or: [
            {email},
            {nickName}
        ]
    }, (err, data) => {
        if (err) return res.status(500).json({
            code: 500,
            msg: '服务端错误'
        });

        if (data) return res.status(200).json({
            code: 1,
            msg: '用户名或邮箱已经存在，换一个试试吧~'
        });

        // 写入数据库
        new UserInfo(req.body).save((err, data) => {
            if (err) return res.status(500).json({
                code: 0,
                msg: '数据写入失败'
            });

            res.status(200).json({
                code: 0,
                msg: 'success'
            });
        })
    })
}
