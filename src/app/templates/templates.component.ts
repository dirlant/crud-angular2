import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.css']
})
export class TemplatesComponent implements OnInit {

	public titulo;
	public administrador:  boolean;

  constructor() { 
  	this.titulo = "Plantillas NgTemplates en Angular";
  	this.administrador = true;
  }

  ngOnInit() {
  }

  cambiarStatus(varStatus){
  	this.administrador = varStatus;
  }

}
