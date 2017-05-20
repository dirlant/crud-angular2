import { Injectable } from '@angular/core';

@Injectable()
export class ClotheService {

	public name_clothe = 'Ropa 0';
	public colection_clothe = ['Ropa1', 'Ropa 2','Rops 3'];

	getClothe(){
		return this.colection_clothe;
	}

	addClothe(name_clothe){
		this.colection_clothe.push(name_clothe);
		this.getClothe();
	}	

	deleteObject(index: number){
		this.colection_clothe.splice(index, 1)
		this.getClothe();
	}

}
