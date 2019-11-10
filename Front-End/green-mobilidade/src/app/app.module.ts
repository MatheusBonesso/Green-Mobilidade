import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import{ReactiveFormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenVeiculosComponent } from './green/green-veiculos/green-veiculos.component';
import { GreenCorridasComponent } from './green/green-corridas/green-corridas.component';
import { GreenHomeComponent } from './green/green-home/green-home.component';
import { GreenAlugarComponent } from './green/green-alugar/green-alugar.component';
import { GreenFinanceiroComponent } from './green/green-financeiro/green-financeiro.component';


@NgModule({
  declarations: [
    AppComponent,
    GreenVeiculosComponent,
    GreenCorridasComponent,
    GreenHomeComponent,
    GreenAlugarComponent,
    GreenFinanceiroComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
