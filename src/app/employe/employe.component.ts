import { Component, OnInit } from '@angular/core';
import { Employe } from "./employe";


@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  
  public employe:Employe;
  public array_employe: Array<Employe>;
  public extern_employe: boolean;
  public color: string;
  public select_color: string;
  public width: string;
  public height: string;
  public widthNumber: number;
  public heightNumber: number;


  constructor(){
    this.employe = new Employe('Diego0', 27, 'Admin', true);
    this.array_employe = [
      new Employe('Diego1', 27, 'Admin', true),
      new Employe('Diego2', 27, 'Admin', true),
      new Employe('Diego3', 27, 'Admin', true),

    ];

    
    this.color = 'red';
    this.extern_employe = true;
    this.select_color = 'gray';
    this.width = '200px';
    this.height = '200px';

    this.widthNumber = 200;
    this.heightNumber = 200;
  }


  ngOnInit() {   
    console.log(this.employe);
  }

  alertColor(){
    alert(this.select_color +' '+ this.width +' '+ this.height);
  }

  changeSize(varWidth, varHeight){
    this.widthNumber = varWidth + 5;
    this.heightNumber = varHeight + 5;
  }

  changeExternEmploye(varBool){
    this.extern_employe = varBool;
  }

}
