router.resources('users', '/users', controller.user);
|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/users|users||app.controller.user.index|
|GET|/users/:id|user||app.controller.user.show|openid|
|POST|/users|create_user||app.controller.user.create|
|PUT|/users/:id|update_user||app.controller.user.update|openid|
|DELETE|/users/:id|delete_user||app.controller.user.destroy|
|POST|/users|login||app.controller.user.login|*To be continued*|
```js
{
  id: '',
  username: '',
  avatar: '',
  openid: '',
  schoolId: '',
  realName: '',
  created_at: '',
  updated_at: '',
}
```
OAuth manages the password of the account, and of course can also obtain other identity information, which is temporarily determined by the application itself.

login:
1. register openid
2. authorize nickName as username, avatarUrl
3. oauth school_id as username to bind openid, type
4. check username as school_id type