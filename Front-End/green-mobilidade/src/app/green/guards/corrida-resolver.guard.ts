import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Corrida } from 'src/app/models/corrida';
import { CorridasService } from '../green-corridas/green-corridas.service';

@Injectable({
  providedIn: 'root'
})

export class CorridaResolverGuard implements Resolve<Corrida[]> {
  constructor(private service: CorridasService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Corrida[] | Observable<Corrida[]> | Promise<Corrida[]> {
    return this.service.getCorridas();
  }
  
  
  
}
