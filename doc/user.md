|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/users|users||app.controller.user.index|
|GET|/users/:id|user||app.controller.user.show|
|GET|/users/:id/edit|edit_user||app.controller.user.edit|
|POST|/users|create_user||app.controller.user.create|
|PUT|/users/:id|update_user||app.controller.user.update|
|DELETE|/users/:id|delete_user||app.controller.user.destroy|

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