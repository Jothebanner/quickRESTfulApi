const express = require('express'),
    app = express(),
    port = process.env.PORT || 3025;

console.log('todo list RESTful API server started on: ' + port);

const routes = require('../api/routes/todoListRoutes'); //importing route
routes(app); //register the route

//app.get()

const listener = app.listen(port);

//listener.close();