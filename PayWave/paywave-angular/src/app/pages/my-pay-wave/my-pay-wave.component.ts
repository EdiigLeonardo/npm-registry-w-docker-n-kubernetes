import { Component } from '@angular/core';
import {faArrowUp as faCircleArrowUp} from '@fortawesome/free-solid-svg-icons';
import {faHouseChimneyCrack} from "@fortawesome/free-solid-svg-icons";
import {faArrowDown as faCircleArrowDown} from '@fortawesome/free-solid-svg-icons';
import { ServiceService } from 'src/app/services/service.service';


@Component({
  selector: 'app-my-pay-wave',
  templateUrl: './my-pay-wave.component.html',
  styleUrls: ['./my-pay-wave.component.scss']
})

export class MyPayWaveComponent {
  constructor(private service: ServiceService){

  }
  isCollapsed: boolean = false;
  faCircleArrowUp = faCircleArrowUp;
  faCircleArrowDown = faCircleArrowDown;
  faHouseChimneyCrack = faHouseChimneyCrack;
  mainMoney: number = this.service.mainMoney;
  mainGoals: number = this.service.mainGoals;

  toggleCollapsed = () =>{
    this.isCollapsed = !this.isCollapsed;
    console.log(this.isCollapsed);
  }

}
