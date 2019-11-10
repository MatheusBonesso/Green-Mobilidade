import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Veiculos } from 'src/app/models/veiculos';
import { AlugarService } from '../green-alugar/alugar.service';

@Injectable({
  providedIn: 'root'
})
export class AlugarResolverGuard implements Resolve<Veiculos> {
 
  constructor(private service: AlugarService){}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Veiculos | Observable<Veiculos> | Promise<Veiculos> {
    
    
      return this.service.getVeiculoAlugar(route.params['id']);
    
  }
 
  
}
