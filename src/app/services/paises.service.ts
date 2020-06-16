import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

url: string= 'https://restcountries.eu/rest/v2/'

  constructor(private http:HttpClient) {}

  getAll(){
    return this.http.get(this.url + 'all');
  }

  getOne(pais:string){
    return this.http.get(this.url + 'name/' + pais)
  }

}
