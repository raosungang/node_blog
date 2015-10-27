var express = require('express');
var router = express.Router();
var ModelUser = require('../models/user');


/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '首页'});
});


router.get('/login', function (req, res) {
    res.render('login', {title: '登陆'});
});

router.post('/login', function (req, res) {

});

router.get('/reg', function (req, res) {
    res.render('reg', {title: '注册'})
});

router.post('/reg', function (req, res) {
    var postData = {
        name: req.body.name,
        password: req.body.password
    };
    ModelUser.create(postData, function (err,data) {
        if(err){
            return err
        }
        res.send(data)
    });
    //res.send('注册成功');
    //console.log(postData);
});

router.get('/logout', function (req, res) {
    res.send('退出')
});

module.exports = router;
