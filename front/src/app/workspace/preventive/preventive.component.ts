import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preventive',
  templateUrl: './preventive.component.html',
  styleUrls: ['./preventive.component.css']
})
export class PreventiveComponent implements OnInit {
	strats:any;
	showForm:boolean;

  constructor() { 
  	this.strats=[{text:'preventive strategy1'},{text:'preventive strategy2'},{text:'preventive strategy3'}];
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
