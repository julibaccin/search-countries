import { Pipe, PipeTransform, ɵConsole } from '@angular/core';

@Pipe({
  name: 'filtrar'
})
export class FiltrarPipe implements PipeTransform {

  transform(arreglo: any[], texto: string = ''): any[] {
    
    if (texto === ''){return arreglo}
    
    texto = texto.toLowerCase();

    return arreglo.filter(item =>{
       return item.name.toLowerCase().includes( texto );
    })

  }
}
