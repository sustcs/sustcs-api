|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/introductions|columns||app.controllers.subject.list|
|GET|/introductions/:id|column||app.controllers.subject.show|
|GET|/introductions/:id/edit|edit_column||app.controllers.subject.edit|
|POST|/introductions|create_column||app.controllers.subject.create|
|PUT|/introductions/:id|update_column||app.controllers.subject.update|
|DELETE|/introductions/:id|delete_column||app.controllers.subject.destroy|