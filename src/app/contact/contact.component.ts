import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	public parameter: any;
	public route: string;
	public ID: any;
  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router
  ){}

  ngOnInit() {
  	this._route.params.forEach((params: Params) => {
  		this.parameter = params['ID'];

  	})
  }

  redirect(varRoute, varID){
  	this._router.navigate([varRoute, varID]);

  }

}
