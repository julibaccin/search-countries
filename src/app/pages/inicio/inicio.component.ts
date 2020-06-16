import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, OnDestroy {

  paises: any = []
  observador: any;
  filtro = '';
  @ViewChild('inpu') inpu: ElementRef;

  constructor(private servicio:PaisesService){
    this.observador = servicio.getAll().subscribe(i =>{
      this.paises = i;
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
   this.observador.unsubscribe();
   console.log('Entro')
  }


  buscar(){{

    this.filtro = this.inpu.nativeElement.value;
    
  }}

}
