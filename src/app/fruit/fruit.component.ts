import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruit',
  templateUrl: './fruit.component.html',
  styleUrls: ['./fruit.component.css']
})
export class FruitComponent implements OnInit {

  public fruits: string;

  constructor(){
    
    this.fruits = "Duraznos, Manzanas, Peras"
  }

  ngOnInit() {

    
  }

}
