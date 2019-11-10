import { Component, OnInit, OnDestroy } from '@angular/core';


import { VeiculosService} from './veiculos.service';

import { Veiculos } from '../../models/veiculos';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'green-veiculos',
  templateUrl: './green-veiculos.component.html',
  styleUrls: ['./green-veiculos.component.css']
})
export class GreenVeiculosComponent implements OnInit{

  veiculos: Veiculos[];

  constructor(private service: VeiculosService, private route: ActivatedRoute) {}

  ngOnInit() {
 
    this.veiculos = this.route.snapshot.data['veiculo'];
    this.formatarDados();
  
  }
  formatarDados(){
      var i = 0;
      this.veiculos.forEach(dado =>{
      let data = new Date(dado.dataHoraUltimaCorrida)
      
        
      if(dado.diasUtilizacao == "DIAS_DA_SEMANA" && (data.getDay()==0 || data.getDay()== 7) ){
        this.veiculos.splice(i,1);
      }
      i++;
    })
    
  }
  
}
