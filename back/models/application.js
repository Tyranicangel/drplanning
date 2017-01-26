var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var AppOld=require('./applicationold');

var appSchema=new Schema({
	name:String,
	type:String,
	description:String,
	criticality:String,
	businessowner:[{type:Schema.ObjectId,ref:'Stakeholer'}],
	itsme:[{type:Schema.ObjectId,ref:'Stakeholer'}],
	vendorsme:[{type:Schema.ObjectId,ref:'Stakeholer'}],
	supporthours:String,
	supportcover:String,
	rto:String,
	rpo:String,
	security:String,
	workaround:String,
	company:{type:Schema.ObjectId,ref:'Company'},
	createdBy:{type:Schema.ObjectId,ref:'User'},
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

appSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	if(this.wasNew){

	}
	else{
		var ov=new AppOld({
			name:this.name,
			type:this.type,
			description:this.description,
			criticality:this.criticality,
			businessowner:this.businessowner,
			itsme:this.itsme,
			vendorsme:this.vendorsme,
			supporthours:this.supporthours,
			supportcover:this.supportcover,
			rto:this.rto,
			rpo:this.rpo,
			security:this.security,
			workaround:this.workaround,
			application:this._id,
			createdBy:this.createdBy,
			active:this.active
		});
		ov.save();
	}
	next();
});

module.exports=mongoose.model('Application',appSchema);