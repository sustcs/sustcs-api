# Shaanxi university of science and technology computer science
- client: [sustcs-miniprogram](https://github.com/sustcs/sustcs-miniprogram)
- admin: [sustcs-admin](https://github.com/sustcs/sustcs-admin)
- back_end api server: [sustcs-api](https://github.com/sustcs/sustcs-api)
- oauth server: [sustcs-oauth](https://github.com/sustcs/sustcs-oauth)

Please refer to the [wiki](https://github.com/sustcs/sustcs-miniprogram/wiki) for more
# 1 dev
```sh
npm install
npx sequelize db:migrate # Database ORM
npm run dev
```
# 2 start
```sh
npm start
npm stop
```
# 3 unit test
```sh
NODE_ENV=test npx sequelize db:migrate
npm test
```
详细模块见doc,未完待续
