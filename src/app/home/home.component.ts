import { Component, OnInit } from '@angular/core';
import { ClotheService } from '../services/clothe.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ClotheService]
})
export class HomeComponent implements OnInit {

	public list_clothe: Array<string>;
	public new_clothe: string;
	public date: any;

  constructor(
  	private _clotheService: ClotheService
  ){
  	this.date = new Date();
  }

  saveClothe(){
  	this._clotheService.addClothe(this.new_clothe);
  	this.new_clothe = null;
  }

  deleteClothe(index: number){
  	this._clotheService.deleteObject(index);
  }
  ngOnInit() {
  	this.list_clothe = this._clotheService.getClothe();
  }

}
