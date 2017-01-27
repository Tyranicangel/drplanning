var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var InfraOld=require('./infraold');

var infraSchema=new Schema({
	name:{type:String,required:true},
	type:String,
	items:Schema.Types.Mixed,
	createdBy:{type:Schema.ObjectId,ref:'User'},
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

infraSchema.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	if(this.wasNew){

	}
	else{
		var oi=new InfraOld({
			name:this.name,
			type:this.type,
			items:this.items,
			infra:this._id,
			createdBy:this.createdBy,
			active:this.active
		});
		oi.save();
	}
	next();
});

module.exports=mongoose.model('Infra',infraSchema);