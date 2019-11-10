import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Veiculos } from 'src/app/models/veiculos';


@Injectable({
    providedIn: 'root'
})
export class AlugarService{
    private readonly API = 'http://localhost:8080/alugar/'

    constructor(private http: HttpClient){}

    getVeiculoAlugar(id: string){
      return this.http.get<Veiculos>(this.API + id);
    }

    criarCorrida(veiculoAlugado:Veiculos){

        return this.http.post(this.API, veiculoAlugado);
    }

}