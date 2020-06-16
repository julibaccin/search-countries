import { Component, OnInit } from '@angular/core';
import { PaisesService } from 'src/app/services/paises.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-especifico',
  templateUrl: './especifico.component.html',
  styleUrls: ['./especifico.component.css']
})
export class EspecificoComponent implements OnInit {

nombre: any;
pais: any;

  constructor(private servicio:PaisesService,
              private ruta:ActivatedRoute ) {

   }

  ngOnInit(): void {

    this.ruta.params.subscribe(i=>{
      this.nombre = i.name;
      this.servicio.getOne(this.nombre).subscribe(a=>{
        this.pais = a[0];
      })
    })

    

  }

}
