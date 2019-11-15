import { Component, OnInit } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { AlugarService } from './alugar.service';
import { Veiculos } from 'src/app/models/veiculos';



@Component({
  selector: 'app-green-alugar',
  templateUrl: './green-alugar.component.html',
  styleUrls: ['./green-alugar.component.css']
})
export class GreenAlugarComponent implements OnInit{

  
  veiculoAlugado: Veiculos;
  form: FormGroup;
  
  

  constructor(private service: AlugarService, private route: ActivatedRoute,
     private formBuilder: FormBuilder, private router: Router) { 

  }

  ngOnInit() {
     
    this.veiculoAlugado = this.route.snapshot.data['alugar'];
    console.log(this.veiculoAlugado)
    this.form = this.formBuilder.group({
      email:[null]
    })
  }
     
  
  onSubmit = () =>{
    event.preventDefault();
    this.veiculoAlugado.emailCondutor = this.form.value['email'];
    this.veiculoAlugado.ativa = true;
    this.service.criarCorrida(this.veiculoAlugado).subscribe(
      ()=> this.router.navigate(['aluguel'])
    )
  }

  onCancel = () => {
    event.preventDefault();
    this.router.navigate(['veiculos']);
  }
  
  
}

