import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculos } from 'src/app/models/veiculos';
import { Corrida } from 'src/app/models/corrida';

@Injectable({
  providedIn: 'root'
})
export class CorridasService {
  
  private readonly API = 'http://localhost:8080/corridas/'
  private readonly API_VEICULO = 'http://localhost:8080/veiculos/'

    constructor(private http: HttpClient){}

    getCorridas(){
      return this.http.get<Corrida[]>(this.API);
    }

    finalizarCorrida(idCorrida: string, corrida: Corrida) {
      
      return this.http.put(this.API + idCorrida, corrida)

    }

    atualizarVeiculo(veiculo: Veiculos, id : string){
      return this.http.put(this.API_VEICULO + id, veiculo)

    }

}
