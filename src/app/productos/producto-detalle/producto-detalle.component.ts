import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css'],
  providers:[ProductoService]
})
export class ProductoDetalleComponent implements OnInit {

  public titulo: string;
  public producto: Product;

  constructor(
  	private _productoService : ProductoService,
  	private _route : ActivatedRoute,
  	private _router : Router
  ) {   
    this.titulo = 'ProductoDetalleComponent';
    this.producto = new Product(0,'','',0);
  }

  ngOnInit() {
    this.getProducto();
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

}
