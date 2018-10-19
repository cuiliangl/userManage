
#### 路由配置：

| url       | methods | params           |use    |
| -         | :-:     | -:               | -     | 
| /         | get     | 无               |列表页  |
| /login    | get     | 无               |登录页  |
| /login    | post    | email、password  |登录  |
| /register | get     | 无               |注册页  |
| /register | post    | userName、email、password|注册 |



查看mongoDB的版本号 `mongo -version`



1. mongod 开启数据库

2. 再打开一个终端 输入 mongo 连接数据库

3. 使用 `exit` 或者 `ctrl + c` 断开连接

4. 基本命令



```shell
# 显示所有数据库
show dbs 

# 切换指定数据库 如果没有会新建
use 数据库名称

# 显示当前数据库
db

# 创建集合 
db.createCollection(name, options) // name为集合名，options为可选的对象参数，包括size，max等属性

# 显示当前数据库的所有集合
show collections

# 删除某个集合
db.Collection_Name.drop()

# 插入数据
db.COLLECTION_NAME.insert(document)   

// 以上实例中 COLLECTION_NAME 是集合名，如果该集合不在该数据库中， MongoDB 会自动创建该集合并插入文档。
eg: db.userInfo.insertOne({"name": "cuiliangliang", "age": 18})

# 更新数据
db.Collection_Name.update(
   <query>,     // 查询条件
   <update>,    // 更新后的数据
   {
     upsert: <boolean>,         // 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
     multi: <boolean>,          //  可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
     writeConcern: <document>   // 可选，抛出异常的级别。
   }
)

# 查询数据
db.Collection_Name.find(query, projection)  
// query 可选，查询条件
// 可选，使用投影操作符指定返回的键。查询时返回文档中所有键值， 只需省略该参数即可（默认省略）。

// 以易读的方式来读取数据
db.Collection_Name.find().pretty() 

eg: db.userInfo.find();

# 多条件查询 AND
db.Collection_Name.find({key1: value1, key2 :value2}).pretty()

# OR
db.Collection_Name.find(
   {
      $or: [
         {key1: value1}, {key2: value2}
      ]
   }
).pretty()

# AND 和 OR 联合使用
db.col.find({key1: value1}, $or: [{key2: value2},{key3: value3}]}).pretty()


# 删除数据
db.collection.remove(
   <query>,
   <justOne>
)

# 如果你的 MongoDB 是 2.6 版本以后的，语法格式如下：
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
desc:
query :（可选）删除的文档的条件。
justOne : （可选）如果设为 true 或 1，则只删除一个文档。
writeConcern :（可选）抛出异常的级别。
```
超爽哦，哈哈哈哈