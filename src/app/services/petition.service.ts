import { Injectable } from '@angular/core';
import { Http, Response,  Headers } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PetitionService {

	public url: string;

	constructor(
			private _http: Http
		){
		this.url = 	'https://jsonplaceholder.typicode.com/posts';	
	}
	getPrueba(){
		return 'Hola mundo desde el servicio';
	}

	getArticle(){
		return this._http.get(this.url).map(Response => Response.json())
	}
}
