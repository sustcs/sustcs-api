# error
1. contentscript.js:1 Uncaught Error
    at contentscript.js:1
(anonymous) @ contentscript.js:1
  - solution:disable Ads Killer Adblocker Plus
  - 未知原因
2. TypeError: ctx.validate is not a function
# RESTful API
界定几个名词
- 数据中心: 资源服务
- 第三方应用: 客户端
- 用户: 资源所有者
- 用户凭证: 账号密码
针对同一个数据中心，用户的实名信息已经注册绑定，所有的应用都视为第三方应用，都需要经过oauth授权后获取token,然后通过统一的API服务器。需要做针对数据中心的后台管理，用于管理第三方应用的申请备案、API统计分析、资源的管理
~~API不应以应用类型区分，而是以是否鉴权分为两类。~~ 对外的API分为两类
- 不做权限保护
- 需要OAuth 授权
　　区分三类角色，admin,user,develop,在其角色之下再按权限划分子角色，鉴权一方面用于第三方应用在业务上获取用户的私密信息，另一方面用于保持登录态进行数据操作。



定义用户相关的接口
|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|
# 接口保护
已防止百度爬虫、防curl请求;
已gzip压缩

# 加载配置
加密

# 计划
- [x] 统一认证OAuth服务，基础用户信息表,
- [x] 本系统用户接口，账号密码登录认证（Passport，进入服务层发起HttpClient）
- [x] 管理端，管理员扫码登录

# 用户表
- openid
- userinfo
- 手机号
- 学号/工号
- 认证状态
- 认证信息？
- 角色
- 注册时间
- 登录日志

权限表
- 角色
- 权限

# 数据库环境区分
所有环境使用同一个数据源，只切换数据库
ci环境下没有数据库
# heados
index路由提示API还是列出所有资源

# init
npx sequelize db:migrate
NODE_ENV=test npx sequelize db:migrate
# 定位
## Controller
1. 获取参数、校验参数
2. 处理封装参数
3. 提到服务层处理业务
4. 获取业务结果，封装返回值
5. 返回结果和状态码

## Service 
1. 获取参数
2. 获取额外参数
3. 提到模型层操作数据库
4. 获取操作结果返回

## Model
对数据库的基础操作
1. 查
2. 改

findAndCountAll
findAll
findOne
findOrCreate