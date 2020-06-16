import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { EspecificoComponent } from './pages/especifico/especifico.component';


const routes: Routes = [
  {path: '', component:InicioComponent},
  {path: 'especifico/:name', component:EspecificoComponent},
  {path: '**', redirectTo:'', pathMatch:'full',}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
