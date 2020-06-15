'use strict';
module.exports = function(app) {
    //const todoList = require('../controllers/todoListController');

    app.route('/')
        .get(function(req, res) {
            res.send('Hello World');
        })

        app.route('/partytime')
        .get(function(req, res) {
            res.send('Party Time!');
        })

}