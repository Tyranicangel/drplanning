var express = require('express');
var router = express.Router();
var Company = require('../models/company');
var User = require('../models/user');
var Infra = require('../models/infra');

router.get('/all', function(req, res, next) {
	var user=req.authdata;
	User.findById(user.id,function(err,data){
		Infra.find({company:data.company,active:true}).sort('name').exec(function(err,dat){
			return res.json(dat);
		});
	});
});

router.post('/remove',function(req,res,next) {
	var user=req.authdata;
	var itm=req.body.infra;
	Infra.findById(itm._id,function(err,data){
		data.active=false;
		data.save().then(function(result){
			Infra.find({company:data.company,active:true}).sort('name').exec(function(err,dat){
				return res.json(dat);
			});
		});
	});
});

router.post('/save',function(req,res,next) {
	var user=req.authdata;
	var itm=req.body.infra;
	User.findById(user.id,function(err,data){
		if(itm._id){
			Infra.findById(itm._id,function(err,data){
				data.name=itm.name,
				data.items=itm.items,
				data.createdBy=data._id,
				data.save().then(function(result){
					Infra.find({company:data.company,active:true}).sort('name').exec(function(err,dat){
						return res.json(dat);
					});
				});
			});
		}
		else{
			var infra=new Infra({
				name:itm.name,
				items:itm.items,
				company:data.company,
				createdBy:data._id,
				active:true
			});
			infra.save(function(err,result){
				Infra.find({company:data.company,active:true}).sort('name').exec(function(err,dat){
					return res.json(dat);
				});
			});
		}
	});
});

module.exports = router;