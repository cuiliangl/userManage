/**
 * @file 数据处理，只处理数据不关心业务
 * @author cuiliang
 * @since 2018.10.17
 */

const mongoose = require('mongoose');

// 连接数据库 userManage 没有的话会自动创建，并且如果没有数据 执行show dbs的时候不会显示该数据库，当有了数据后就会显示
mongoose.connect('mongodb://localhost/userManage');

const Schema = mongoose.Schema;

// 设计数据表结构  MongoDB 是动态的，通过代码来设计数据库--灵活
const UserManageSchema = new Schema({
    userName: {
        type: String,
        required: true,
        default: ''
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: Number,
        required: true,
        enum: [0, 1]
    },
    birthday: {
        type: String
    },
    job: {
        type: String
    },
    describe: {
        type: String
    }
})

const UserInfoSchema = new Schema({
    nickName: {
        type: String,
        default: 'admin'
    },
    email: {
        type: String,
        default: 'admin@qq.com'
    },
    password: {
        type: String,
        default: '123456'
    }
})

// 创建模型构造器 即集合
// 参数1 为集合名，会转换成小写复数的形式，即usermanages MangOOSE自动寻找模型名称的复数版本 
// 参数2为集合的架构

// 用户表
const UserManage = mongoose.model('userManage', UserManageSchema);

// 管理员表
const UserInfo =mongoose.model('userInfo', UserInfoSchema);

module.exports = {
    UserManage,
    UserInfo
};

// 创建一条数据
// const User = new UserManage({
//     userName: 'cuiliang',
//     age: 19,
//     gender: 1,
//     birthday: '1992-11-27',
//     job: 'IT',
//     describe: 'code'
// });

// 存储User数据
// User.save((err, data) => {
//     if (err) {
//         console.log('oops, err')
//     }
//     else {
//         console.log(data);
//         console.log('save success')
//     }
// })

// 查询所有
// UserManage.find((err, data) => {
//     if (err) {
//         console.log('find failed')
//     }
//     else {
//         console.log(data)
//     }
// })

// 按条件查找
// UserManage.find({age: 19}, (err, data) => {
//     if (err) {
//         console.log('find failed')
//     }
//     else {
//         console.log(data);
//     }
// })


// 新增
// exports.save = (data) => {
//     const userInfo = new UserManage(data);

//     userInfo.save((err, ret) => {
//         if (err) return console.log(err);

//         return ret;
//     })
// }

// // 查询所有
// exports.findAll = () => {
//     UserManage.find((err, data) => {
//         if (err) return console.log(err);

//         console.log(data, 1)
        
//         return data;
//     })
// }

// // 查询一条
// exports.findOne = (data) => {
//     UserManage.findOne(data, (err, ret) => {
//         if (err) return console.log(err);

//         return ret;
//     })
// }


// // 修改一条
// exports.updataOne = (id) => {
//     UserManage.findByIdAndUpdate({
//         _id: id
//     }, (err, ret) => {
//         if (err) console.log(err);

//         return ret;
//     })
// }

// // 删除
// exports.deleteOne = (id) => {
//     UserManage.deleteOne({
//         _id: id
//     }, (err, data) => {
//         if (err) return console.log(err);

//         return data;
//     })
// }
