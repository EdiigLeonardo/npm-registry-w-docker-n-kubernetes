import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-send-money-modal',
  templateUrl: './send-money-modal.component.html',
  styleUrls: ['./send-money-modal.component.scss']
})
export class SendMoneyModalComponent {
  @Input() modal_aberto: boolean = false;
  valorModal: string = '';
}
