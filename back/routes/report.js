var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Testlog = require('../models/testlog');
var Backup = require('../models/backup');
var Vendor = require('../models/vendor');

router.get('/dashboard', function(req, res, next) {
	var user=req.authdata;
	plist=[];
	User.findById(user.id,function(err,data){
		cdate=new Date();
		month3=new Date();
		month3.setMonth(month3.getMonth()+3);
		month6=new Date();
		month6.setMonth(month3.getMonth()+6);
		plist[0]=Vendor.find({company:data.company,active:true,contractexpiry:{$gt:cdate,$lt:month3}});
		plist[1]=Vendor.find({company:data.company,active:true,contractexpiry:{$gt:month3,$lt:month6}});
		plist[2]=Vendor.find({company:data.company,active:true,contractexpiry:{$lt:cdate}});
	});
});

module.exports = router;