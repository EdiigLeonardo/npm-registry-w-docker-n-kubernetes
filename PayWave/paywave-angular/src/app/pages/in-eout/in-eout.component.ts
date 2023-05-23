import { Component } from '@angular/core';
import {faArrowDown,faPlus, faMoneyBill1Wave, faArrowRight, faArrowUp, faMoneyBills, faMoneyBillWheat} from '@fortawesome/free-solid-svg-icons';
import {faHand, faHandsPraying, faHandshake} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-in-eout',
  templateUrl: './in-eout.component.html',
  styleUrls: ['./in-eout.component.scss']
})

export class InEOutComponent {
  constructor(private service: ServiceService){
  }

  faArrowUp = faArrowUp;
  faArrowRight = faArrowRight;
  faMoneyBills = faMoneyBills;
  faMoneyBillWheat = faMoneyBillWheat;
  faArrowDown = faArrowDown;
  faMoneyBill1Wave = faMoneyBill1Wave;
  faPlus = faPlus;
  faHand = faHand;
  faHandsPraying = faHandsPraying;
  faHandshake = faHandshake;

  modal_aberto: boolean = false;

  valores: any = {
    value: '',
    name: '',
    iban: ''
  };

  saldo: number = this.service.mainMoney;

  openModal(){
    this.modal_aberto = true;
  }
  closeModal(){
    this.modal_aberto = false;
  }

  youClickedOut(){
    this.modal_aberto = false;
  }

  isNumeric(value: any): boolean {
    return !isNaN(parseFloat(value)) && isFinite(value);
  }

  submitValues(){
    if(parseInt(this.valores.value) <= this.service.mainMoney){
      if(this.valores.name !=="" && this.valores.iban !== ''){
        alert(`Você acaba de mandar dinheiro para ${this.valores.name.toUpperCase()}`)
      }
      this.service.mainMoney = this.service.tirarDinheiro(parseInt(this.valores.value));
      this.saldo = this.service.mainMoney;
    }
    else if(!this.isNumeric(this.valores.value) || this.valores.value  === ""){
      alert("Você deve colocar um valor numerico para tranferir");
    }
    else{
      alert("Infelizmente você não tem dinheiro suficiente, vou reencaminhá-lo para a página inicial");
    }
    this.modal_aberto = false;

    this.valores.value = "";
    this.valores.name = "";
    this.valores.iban = "";
    //console.log(this.valores.value, this.valores.name, this.valores.iban)
  }
}
