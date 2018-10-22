/**
 * @file 退出登录
 * @author cuiliang
 * @since 2018.10.22
 */

module.exports = (req, res) => {
    // 清除 session
    req.session.user = null;

    // 重定向
    res.redirect('/login');
}
