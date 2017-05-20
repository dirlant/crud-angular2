import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing,  appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { EmployeComponent } from './employe/employe.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConverterPipe } from './pipes/converter.pipe';
import { CarsComponent } from './cars/cars.component';
import { TemplatesComponent } from './templates/templates.component';
import { ErrorComponent } from './error/error.component';

// productos
import { ProductosComponent } from './productos/index-producto/productos.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';
import { ProductoAgregarComponent } from './productos/producto-agregar/producto-agregar.component';
import { ProductoEditarComponent } from './productos/producto-editar/producto-editar.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeComponent,
    FruitComponent,
    HomeComponent,
    ContactComponent,
    ConverterPipe,
    CarsComponent,
    TemplatesComponent,
    ProductosComponent,
    ErrorComponent,
    ProductoDetalleComponent,
    ProductoAgregarComponent,
    ProductoEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
