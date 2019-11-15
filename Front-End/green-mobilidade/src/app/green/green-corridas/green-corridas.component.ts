import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Veiculos } from 'src/app/models/veiculos';
import { CorridasService } from './green-corridas.service';
import { Corrida } from 'src/app/models/corrida';

@Component({
  selector: 'green-corridas',
  templateUrl: './green-corridas.component.html',
  styleUrls: ['./green-corridas.component.css']
})
export class GreenCorridasComponent implements OnInit {

  constructor(private service: CorridasService, private route: ActivatedRoute, private router: Router) { }
  
  corridas: Corrida[];
  veiculo: Veiculos;

  ngOnInit() {
    this.corridas = this.route.snapshot.data['corridas'];
    this.formatarDados();
  }

  formatarDados = () => {
    this.corridas.forEach(corrida => {
      let data = new Date(corrida.horaInicio);
      corrida.horaInicioFormatada  = data.toLocaleString();
    })
  }

  finalizarCorrida = (corridaSelecionada: string)=>{
    event.preventDefault();
    let alerta = confirm("Deseja realmente finalizar a corrida?")
    let veiculo: Veiculos = this.corridas[corridaSelecionada].veiculo;
    
    
    if(alerta){
      this.corridas[corridaSelecionada].horaFim = new Date();
      this.corridas[corridaSelecionada].ativa = false;
      veiculo.dataHoraUltimaCorrida = new Date();
      this.service.finalizarCorrida(this.corridas[corridaSelecionada].id, this.corridas[corridaSelecionada]).subscribe(()=>{
        this.service.atualizarVeiculo(veiculo, veiculo.id).subscribe()
        
      });
      this.router.navigate['veiculos']
    }else{
      console.log("false");
    }
  }

}
