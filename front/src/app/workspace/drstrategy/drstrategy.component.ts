import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drstrategy',
  templateUrl: './drstrategy.component.html',
  styleUrls: ['./drstrategy.component.css']
})
export class DrstrategyComponent implements OnInit {
	strats:any;
	showForm:boolean;

  constructor() { 
  	this.strats=[{text:'dr strategy1'},{text:'dr strategy2'},{text:'dr strategy3'}];
  	this.showForm=false;
  }

  ngOnInit() {
  }

  edit(){
  	this.showForm=true;
  }

  saveForm(){
  	this.showForm=false;
  }

  add(){
  	this.strats.push({text:""});
  }

  remove(i){
  	this.strats.splice(i,1);
  }

}
