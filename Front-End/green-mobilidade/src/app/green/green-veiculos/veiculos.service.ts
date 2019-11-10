import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Veiculos } from '../../models/veiculos';

@Injectable({
    providedIn: 'root'
})
export class VeiculosService{
   private readonly API = 'http://localhost:8080/veiculos'
    constructor(private http: HttpClient){}

    getVeiculos(){
           return this.http.get<Veiculos[]>(this.API);
    }
}