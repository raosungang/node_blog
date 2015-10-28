//var express = require('express');
//var app = express.Router();
var ModelUser = require('../models/user');
//var app = express();


module.exports = function (app) {
    app.use(function (req, res, next) {
        var user = req.session.user;
        if (user) {
            app.locals.user = user;
        } else {
            app.locals.user = user;
        }
        next();
    });

    /* GET home page. */
    app.get('/', function (req, res, next) {
        res.render('index', {title: '首页'});
    });


    app.get('/login', function (req, res, next) {
        res.render('login', {title: '登陆'});
    });

    app.post('/login', function (req, res, next) {
        var postData = {
            name: req.body.name,
            password: req.body.password
        };
        ModelUser.findOne(postData, function (err, data) {
            if (err) {
                return err
            }
            if (data) {
                if (data.password == req.body.password) {
                    req.session.user = data;
                    res.redirect('/user/' + data._id);
                    //res.send('登陆成功')
                } else {
                    res.send('密码错误')
                }

            } else {
                res.send('没有用户或者密码错误')
            }
        });
        //res.send(postData)
    });

    app.get('/reg', function (req, res, next) {
        res.render('reg', {title: '注册'})
    });

    app.post('/reg', function (req, res, next) {
        var postData = {
            name: req.body.name,
            password: req.body.password
        };

        ModelUser.findOne({
            name: req.body.name
        }, function (err, data) {
            if (err) console.log(err);

            if (data) {
                res.send('此用户已注册')
            } else {
                ModelUser.create(postData, function (err, data) {
                    if (err) {
                        return err
                    }
                    req.session.user = data;
                    res.redirect('/');
                    //res.send('注册成功');
                });
            }
        });
        //res.send('注册成功');
        //console.log(postData);
    });

    app.get('/logout', function (req, res, next) {
        delete req.session.user;
        res.redirect('/');
        res.send('退出')
    });


    app.get('/user/:_id', function (req,res,next) {
        res.send('嗨,用户中心!')
    })
};


//
//module.exports = app;
