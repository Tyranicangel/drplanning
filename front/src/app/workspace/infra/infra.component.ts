import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api.service';
import { LoaderService } from '../../loader/loader.service';
import { ModalDirective } from 'ng2-bootstrap';
import { Infra } from './infra';
import { Item } from './item';

@Component({
  selector: 'app-infra',
  templateUrl: './infra.component.html',
  styleUrls: ['./infra.component.css']
})
export class InfraComponent implements OnInit {
	@ViewChild('modal') public Modal:ModalDirective;
	infra:Infra;
	infralist:Array<Infra>;
  defaults:Array<any>;

  constructor(private api:ApiService, private loader:LoaderService) { 
  	this.infra=new Infra();
  	this.infralist=[];
  }

  ngOnInit() {
    this.api.getAll('defaultinfra/default')
    .subscribe(data=>{
      this.defaults=data;
    });
  }

  ngAfterViewInit() {
  	this.api.getAll('infra/all')
  	.subscribe(data=>{
      console.log(data);
  		this.infralist=data;
  		if(data.length==0){
		  	this.infra=new Infra();
		  	this.Modal.show();
  		}
  	});
  }

  changed(){
    if(this.infra.items.length==0){
      for (var i = 0; i < this.defaults.length; i++) {
        if(this.defaults[i].infratype._id==this.infra.type){
          this.infra.addDefault(this.defaults[i].items);
          break;
        }
      }
    }
  }

  additem(){
		let it=new Item();
		this.infra.items.push(it);
	}

	removeitem(i){
		this.infra.items.splice(i,1);
	}


  add(){
  	this.infra=new Infra();
  	this.Modal.show();
  }

  remove(){
    this.loader.show();
  	this.api.post('infra/remove',{infra:this.infra})
  	.subscribe(data=>{
      this.loader.hide();
  		this.Modal.hide();
  		this.infralist=data;
  	});
  }

  edit(itm){
  	this.infra=itm;
  	this.Modal.show();
  }

  save(){
    this.loader.show();
  	this.api.post('infra/save',{infra:this.infra})
  	.subscribe(data=>{
      this.loader.hide();
  		this.Modal.hide();
  		this.infralist=data;
  	});
  }

}
