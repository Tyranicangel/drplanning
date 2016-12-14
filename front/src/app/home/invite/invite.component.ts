import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invite',
  templateUrl: './invite.component.html',
  styleUrls: ['./invite.component.css']
})
export class InviteComponent implements OnInit {
	emails:String[];
  constructor() { 
  	this.emails=["","",""]
  }

  ngOnInit() {
  }

  add(){
  	this.emails.push("1");
  }

  remove(i){
  	this.emails.splice(i,1);
  }

}
