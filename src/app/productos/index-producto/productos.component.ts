import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,  Params } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Product } from '../../models/product';

declare var jQuery : any;
declare var $ : any;


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit {
	public titulo: string;
	public constante: any;
	public productos: Product[];

  constructor(
  	private _route: ActivatedRoute,
  	private _router: Router,
  	private _productoService: ProductoService,
  ){ 
  	this.titulo = "Listado de Productos";
  	this.productos = [];

  }

  public ID: number;
  public titulo_modal: string;
  public texto_modal: string;
  
  modalPoup(ID){
    
    $('#myModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })

    this.ID = ID;
    this.titulo_modal = 'Titulo Modal';
    this.texto_modal = 'Texto del Modal';

  }

  ngOnInit() {
  	this.getProductos();
  }

  onDelete(ID){      
    this._productoService.deleteProducto(ID).subscribe(
      Response =>{
        this.getProductos();
      },
      Error =>{
        console.log(<any>Error)
      }
    );
  }

  getProductos(){
    this.constante = this._productoService.getProductos().subscribe(
      Response =>{
        this.productos = Response.data,
        console.log(this.productos)
      },
      Error =>{
        console.log(<any>Error)
      }
    );
  }
}

