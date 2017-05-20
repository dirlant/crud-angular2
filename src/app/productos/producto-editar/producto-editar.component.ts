import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-producto-editar',
  templateUrl: '../producto-agregar/producto-agregar.component.html',
  providers:[ProductoService]
})
export class ProductoEditarComponent implements OnInit {
	public titulo: string;
	public producto: Product;

  constructor(
  	private _productoService : ProductoService,
  	private _route : ActivatedRoute,
  	private _router : Router
  ) { 
  	this.titulo = "ProductoEditarComponent";
  	this.producto = new Product(0,'','',0);

  }

  ngOnInit() {
  	this.getProducto();
  }	

	onSubmit(){
		this.updateProducto();
	}

  getProducto(){
    this._route.params.forEach((params: Params) => {
      let ID = params['ID'];   
      this._productoService.getProducto(ID).subscribe(
        Response =>{
          this.producto = Response.data
        },
        Error =>{
          console.log(<any>Error)
        }
      );
    })
  }

  updateProducto(){
  	this._route.params.forEach((params: Params) => {
      let ID = params['ID'];   
      this._productoService.updateProducto(ID, this.producto).subscribe(
        Response =>{
          this._router.navigate(['/productos']);
        },
        Error =>{
          console.log(<any>Error)
        }
      );
    })
  }
}
