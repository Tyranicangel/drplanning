import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { LoaderService } from '../../loader/loader.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	contract_3:string;
	contract_6:string;
	contract_exp:string;
	apps:number;
	tested_2016:number;
	tested_2017:number;
	backlogged:number;
  constructor(private api:ApiService, private loader:LoaderService) {
  	this.contract_3="";
  	this.contract_6="";
  	this.contract_exp="";
  	this.apps=0;
	this.tested_2016=0;
	this.tested_2017=0;
	this.backlogged=0;
   }

  ngOnInit() {
  	this.api.getAll('/report/dashboard')
  	.subscribe(data=>{
  		this.contract_exp=data[0];
  		this.contract_3=data[1];
  		this.contract_6=data[2];
  		this.apps=data[3];
  		this.tested_2016=data[4];
  		this.tested_2017=data[5];
  		this.backlogged=data[6];
  		console.log(data);
  	});
  }

}
