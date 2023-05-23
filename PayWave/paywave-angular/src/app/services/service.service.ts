import { Injectable } from '@angular/core';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})

export class ServiceService {
  isOpen: boolean = false;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  mainMoney: number = 1450;
  mainGoals: number = 18500;
  navIsHoved: boolean = false;
  sm_modalAberto: boolean = false;
  constructor() { }

  abrirModal() {
    this.sm_modalAberto = true;
  }

  fecharModal() {
    this.sm_modalAberto = false;
  }

  salvarModal() {
    this.fecharModal();
  }

  tirarDinheiro(number: number){
    return this.mainMoney = this.mainMoney - number;
  }

  recuperarValorDoLocalStorage() {
    return localStorage.getItem('saldo');
  }

  guardarSaldoNoLocalStorage(value: ""){
    localStorage.setItem('saldo', value);
  }
}
