|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/teachers|teachers||app.controller.introduction.index|
|GET|/teachers/:id|teacher||app.controller.introduction.show|
|POST|/teachers|create_teacher||app.controller.introduction.create|
|PUT|/teachers/:id|update_teacher||app.controller.introduction.update|
|DELETE|/teachers/:id|delete_teacher||app.controller.introduction.destroy|


```js
{
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  name: STRING,
  avatar: STRING,
  openid: STRING,
  email: STRING,
  title: STRING,
  position: STRING,
  office: STRING,
  phone: STRING,
  course: STRING,
  introduction: TEXT,
  created_at: DATE,
  updated_at: DATE,
},
```