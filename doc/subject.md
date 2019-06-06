|Method|Path|Route Name|middleware|Controller.Action|Note|
|--|--|--|--|--|--|
|GET|/introductions|columns||app.controller.subject.list|
|GET|/introductions/:id|column||app.controller.subject.show|
|GET|/introductions/:id/edit|edit_column||app.controller.subject.edit|
|POST|/introductions|create_column||app.controller.subject.create|
|PUT|/introductions/:id|update_column||app.controller.subject.update|
|DELETE|/introductions/:id|delete_column||app.controller.subject.destroy|