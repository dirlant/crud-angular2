import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-producto-agregar',
  templateUrl: './producto-agregar.component.html',
  styleUrls: ['./producto-agregar.component.css'],
  providers:[ProductoService]
})
export class ProductoAgregarComponent implements OnInit {

	public titulo: string;
	public producto: Product;

  constructor(
  	private _productoService : ProductoService,
  	private _route : ActivatedRoute,
  	private _router : Router
  ) { 
  	this.titulo = "ProductoAgregarComponent";
  	this.producto = new Product(0,'','', null);

  }

  ngOnInit() {
  }

  onSubmit(){

  	this._productoService.createProducto(this.producto).subscribe(
  		Response =>{
  			this._router.navigate(['/productos'])
  		},
  		Error =>{
  			console.log(<any>Error)
  		}
  	)

  }

}
