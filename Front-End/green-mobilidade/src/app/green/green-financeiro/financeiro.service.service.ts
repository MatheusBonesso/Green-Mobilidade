import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Veiculos } from 'src/app/models/veiculos';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  constructor(private http: HttpClient) { }
  private readonly API = "http://localhost:8080/veiculos";
  getVeiculos(){
    this.http.get<Veiculos[]>(this.API);
  }
}
