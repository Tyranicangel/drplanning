import { Item } from './item';

export class Infra {
	_id:string;
	name:string;
	items:Item[];

	constructor(){
		this._id="";
		this.name="";
		this.items=[];
	}

	addthree(){
		for(var i=0;i<3;i++){
			let it=new Item();
			this.items.push(it);
		}
	}

	add(){
		let it=new Item();
		this.items.push(it);
	}

	remove(i){
		this.items.splice(i,1);
	}
}