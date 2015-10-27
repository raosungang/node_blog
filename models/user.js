/**
 * Created by sungang on 15/10/27.
 */
var mongoose = require('mongoose');
//var tool = require('../plugin/common/tool');


var userScheam = new mongoose.Schema({
    name: {
        type: String,
        uniqure: true
    },
    password: String
});

module.exports = mongoose.model('user',userScheam);
