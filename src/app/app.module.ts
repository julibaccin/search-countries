import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {HttpClientModule} from '@angular/common/http';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EspecificoComponent } from './pages/especifico/especifico.component';
import { FiltrarPipe } from './pipes/filtrar.pipe'

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    InicioComponent,
    EspecificoComponent,
    FiltrarPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
