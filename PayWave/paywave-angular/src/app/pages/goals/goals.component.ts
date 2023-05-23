import { Component } from '@angular/core';
import { faArrowUp, faArrowDown, faStar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faStar = faStar;
  faHandShake = faHandshake;
  faPlus = faPlus;
}
