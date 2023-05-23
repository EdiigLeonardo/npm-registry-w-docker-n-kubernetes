import { Component, OnChanges, SimpleChanges  } from '@angular/core';
import {faWallet} from '@fortawesome/free-solid-svg-icons';
import {faHouseChimney} from "@fortawesome/free-solid-svg-icons";
import {faPiggyBank} from "@fortawesome/free-solid-svg-icons";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
import {faArrowRightArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  faWallet = faWallet;
  faHouseChimneyCrack = faHouseChimney;
  faPiggyBank = faPiggyBank;
  faCreditCard = faCreditCard;
  faArrowsSpin = faArrowRightArrowLeft;

  isHovered: boolean = false;

  constructor(private service: ServiceService){

  }

  onHover(hovered: boolean) {
    this.isHovered = hovered;
    this.service.navIsHoved = true;
  }

  onMouseLeave() {
    this.service.navIsHoved = false;
  }

}
