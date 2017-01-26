var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var defaultinfra=new Schema({
	name:{type:String,required:true},
	items:Schema.Types.Mixed,
	infratype:{type:Schema.ObjectId,ref:'Infratype'},
	createdBy:{type:Schema.ObjectId,ref:'User'},
	active:Boolean,
	created_at:Date,
	updated_at:Date
});

defaultinfra.pre('save',function(next){
	var currentDate=new Date();
	this.updated_at=currentDate;
	if(!this.created_at){
		this.created_at=currentDate;
	}
	next();
});

module.exports=mongoose.model('Defaultinfra',defaultinfra);