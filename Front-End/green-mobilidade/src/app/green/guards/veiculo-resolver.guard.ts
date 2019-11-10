import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { CorridasService } from '../green-corridas/green-corridas.service';
import { Veiculos } from 'src/app/models/veiculos';
import { VeiculosService } from '../green-veiculos/veiculos.service';

@Injectable({
  providedIn: 'root'
})

export class VeiculoResolverGuard implements Resolve<Veiculos[]> {
  constructor(private service: VeiculosService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Veiculos[] | Observable<Veiculos[]> | Promise<Veiculos[]> {
    return this.service.getVeiculos();
  }
  
  
  
}
