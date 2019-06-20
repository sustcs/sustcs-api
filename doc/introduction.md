


|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/introductions|columns||app.controller.introduction.index|
|GET|/introductions/:id|column||app.controller.introduction.show|
|POST|/introductions|create_column||app.controller.introduction.create|
|PUT|/introductions/:id|update_column||app.controller.introduction.update|
|DELETE|/introductions/:id|delete_column||app.controller.introduction.destroy|


```js
{
  id: { type: INTEGER, primaryKey: true, autoIncrement: true },
  title: STRING,
  description: TEXT,
  enable: BOOLEAN, // tinyint 1, 0
  created_at: DATE,
  updated_at: DATE,
}
```