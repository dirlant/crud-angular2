import { Injectable } from '@angular/core';
import { Http, Response,  Headers } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import { Global } from './global';


@Injectable()
export class ProductoService {

	public url: string;
	public version: string;

  constructor(
  	public _http: Http
  ){ 
  	this.url = Global.url;
  	this.version = Global.version;
  }

  getProductos(){
  	return this._http.get(this.url +'productos')
                     .map(Response => Response.json());
  }

  getProducto(ID){
    return this._http.get(this.url +'producto/'+ ID)
                     .map(Response => Response.json());
  }

  createProducto(producto: Product){
    let json = JSON.stringify(producto);
    let params = 'json='+ json;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post(this.url +'productos', params, {headers: headers})
                     .map(Response => Response.json());
  }

  updateProducto(ID, producto: Product){
    let json = JSON.stringify(producto);
    let params = 'json='+ json;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this._http.post(this.url +'update-producto/'+ ID, params, {headers: headers})
                     .map(Response => Response.json());
  }

  deleteProducto(ID){
    return this._http.get(this.url +'delete-producto/'+ ID)
                     .map(Response => Response.json());
  }

}
