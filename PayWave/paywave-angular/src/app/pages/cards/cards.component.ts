import { Component } from '@angular/core';
import {faPlus} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  faPlus = faPlus;
}
