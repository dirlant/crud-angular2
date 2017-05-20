import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { PetitionService } from '../services/petition.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [PetitionService]
})
export class CarsComponent implements OnInit {
	
	public obj_car: Car;
	public array_cars: Array<Car>;
	public array_post;

  constructor(
  		private _petitionsService: PetitionService
  	){ 
  	this.obj_car = new Car();
  	this.array_cars = [];
  }

  ngOnInit() {
  	this._petitionsService.getArticle().subscribe(
  		Response =>{
  			this.array_post = Response;
  		},
  		Error =>{
  			var errorMensage = <any>Error;
  			console.log(errorMensage)
  		}
  		)

  }

  onSubmit(){  	
  	this.array_cars.push(this.obj_car);
  	this.obj_car = new Car();
  	console.log(this.array_cars);
  }

  deleteCar(index){
		this.array_cars.splice(index, 1)
  }

}
