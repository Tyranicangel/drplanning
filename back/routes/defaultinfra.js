var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Infra = require('../models/defaultinfra');

router.get('/all', function(req, res, next) {
	var user=req.authdata;
	User.findById(user.id,function(err,data){
		Infra.find({active:true}).sort('name').exec(function(err,dat){
			return res.json(dat);
		});
	});
});

router.post('/save',function(req,res,next) {
	var user=req.authdata;
	var itm=req.body;
	User.findById(user.id,function(err,data){
		var backup=new Backup({
			application:itm.application,
			frequency:itm.frequency,
			backuptype:itm.backuptype,
			details:itm.details,
			company:data.company,
			createdBy:data._id,
			active:true
		});
		backup.save(function(err,result){
			Backup.find({company:data.company,active:true}).sort('application').exec(function(err,dat){
				return res.json(dat);
			});
		});
	});
});

module.exports = router;