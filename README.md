
#### 路由配置：

| url       | methods | params           |use    |
| -         | :-:     | -:               | -     | 
| /         | get     | 无               |列表页  |
| /login    | get     | 无               |登录页  |
| /login    | post    | email、password  |登录  |
| /register | get     | 无               |注册页  |
| /register | post    | nickName、email、password |注册 |
| /signout  | get     | 无               |退出登录|
| /user/add | get     | 无|新增用户页 |
| /user/add | post    | userName、age、gender等|新增用户 |
| /user/edit | get    | id|编辑页 |
| /user/edit | post    | userName、age、gender等|编辑接口 |
| /user/delete | get    | id|删除用户 |


1. 开启数据库
```shell
mongod 
```

2. 再开启一个终端 连接数据库
 ```shell
 mongo
 ``` 

 3. 启动服务

```bash
npm install
```

```bash
# 全局或者局部安装了nodemon的前提下
nodemon add.js
# 或
node app.js
```

访问 127.0.0.1:3000


服务端重定向只针对同步请求有效，对异步请求无效。
