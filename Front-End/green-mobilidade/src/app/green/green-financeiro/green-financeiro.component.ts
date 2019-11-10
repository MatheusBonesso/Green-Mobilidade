import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from './financeiro.service.service';
import { Veiculos } from 'src/app/models/veiculos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-green-financeiro',
  templateUrl: './green-financeiro.component.html',
  styleUrls: ['./green-financeiro.component.css']
})
export class GreenFinanceiroComponent implements OnInit {
 
  veiculos: Veiculos[];
  constructor(private service: FinanceiroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.veiculos = this.route.snapshot.data['veiculo'];
  }

}
