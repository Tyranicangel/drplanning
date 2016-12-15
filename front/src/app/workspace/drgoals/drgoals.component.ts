import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drgoals',
  templateUrl: './drgoals.component.html',
  styleUrls: ['./drgoals.component.css']
})
export class DrgoalsComponent implements OnInit {
	goals:any;
	showForm:boolean;

  constructor() { 
  	this.goals=[{text:'goal1'},{text:'goal2'},{text:'goal3'}];
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
  	this.goals.push({text:""});
  }

  remove(i){
  	this.goals.splice(i,1);
  }


}
