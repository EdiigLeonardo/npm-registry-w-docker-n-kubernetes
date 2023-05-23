import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './pages/cards/cards.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { InEOutComponent } from './pages/in-eout/in-eout.component';
import { MyPayWaveComponent } from './pages/my-pay-wave/my-pay-wave.component';

const routes: Routes = [
  { path: '', component: MyPayWaveComponent, pathMatch: 'full' },
  {path: "inout", component: InEOutComponent},
  {path: "cards", component: CardsComponent},
  {path: "goals", component: GoalsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
