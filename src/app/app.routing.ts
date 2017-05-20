import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeComponent } from './employe/employe.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CarsComponent } from './cars/cars.component';
import { TemplatesComponent } from './templates/templates.component';
import { ErrorComponent } from './error/error.component';

// productos
import { ProductosComponent } from './productos/index-producto/productos.component';
import { ProductoAgregarComponent } from './productos/producto-agregar/producto-agregar.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';
import { ProductoEditarComponent } from './productos/producto-editar/producto-editar.component';


const appRoutes: Routes = [
	{path: '', component: ProductosComponent},
	{path: 'home', component: HomeComponent},
	{path: 'contact', component: ContactComponent},
	{path: 'contact/:ID', component: ContactComponent},
	{path: 'employe', component: EmployeComponent},
	{path: 'fruit', component: FruitComponent},
	{path: 'car', component: CarsComponent},
	{path: 'templates', component: TemplatesComponent},
	{path: 'productos', component: ProductosComponent},
	{path: 'product-add', component: ProductoAgregarComponent},
	{path: 'product-detail/:ID', component: ProductoDetalleComponent},
	{path: 'product-edit/:ID', component: ProductoEditarComponent},
	{path: '**', component: ErrorComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);