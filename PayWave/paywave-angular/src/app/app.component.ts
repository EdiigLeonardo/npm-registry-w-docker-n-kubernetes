import { Component } from '@angular/core';
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faBars = faBars;
  title = 'pay-wave-angular';
  isOpen: boolean = false;

  constructor(private service: ServiceService){

  }

  toggleIsOpen = () => {
    this.service.isOpen = !this.service.isOpen;
    this.isOpen = this.service.isOpen;
  }
  
  mouseLeaved(){
    if(!this.service.navIsHoved && this.isOpen){
      this.isOpen = false;
    }
  }
}
