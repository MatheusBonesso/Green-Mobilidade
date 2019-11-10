import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GreenVeiculosComponent } from './green/green-veiculos/green-veiculos.component';
import { GreenCorridasComponent } from './green/green-corridas/green-corridas.component';
import { GreenAlugarComponent } from './green/green-alugar/green-alugar.component';
import { AlugarResolverGuard } from './green/guards/alugar-resolver.guard';
import { CorridaResolverGuard } from './green/guards/corrida-resolver.guard';
import { GreenFinanceiroComponent } from './green/green-financeiro/green-financeiro.component';
import { VeiculoResolverGuard } from './green/guards/veiculo-resolver.guard';



const appRoute: Routes = [
  {path:'',component: GreenVeiculosComponent},
  {
  path: 'veiculos', 
  component: GreenVeiculosComponent,
  resolve:{
    veiculo: VeiculoResolverGuard
  }
    },
  {path:'financeiro', 
  component: GreenFinanceiroComponent,
  resolve:{
    veiculo: VeiculoResolverGuard
    }
  },
  {
    path:'corridas', 
    component:GreenCorridasComponent,
    resolve:{
        corridas:CorridaResolverGuard
      }
    },
  {
    path:'alugar/:id', 
    component: GreenAlugarComponent, 
    resolve:{
      alugar: AlugarResolverGuard}
    }
  
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
