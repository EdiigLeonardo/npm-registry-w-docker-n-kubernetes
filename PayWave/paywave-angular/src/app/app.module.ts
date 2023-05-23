import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyPayWaveComponent } from './pages/my-pay-wave/my-pay-wave.component';
import { InEOutComponent } from './pages/in-eout/in-eout.component';
import { CardsComponent } from './pages/cards/cards.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SendMoneyModalComponent } from './components/modals/send-money-modal/send-money-modal.component';
import { ConfirmActionComponent } from './components/modals/confirm-action/confirm-action.component';
import { AlertComponent } from './components/modals/alert/alert.component';
import { Component, Renderer2, HostListener } from '@angular/core';

const routes: Routes = [
  { path: '', component: MyPayWaveComponent, pathMatch: 'full' },
  { path: 'homepage', component: MyPayWaveComponent, pathMatch: 'full' },
  {path: "inout", component: InEOutComponent},
  {path: "cards", component: CardsComponent},
  {path: "goals", component: GoalsComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    MyPayWaveComponent,
    InEOutComponent,
    CardsComponent,
    GoalsComponent,
    NavbarComponent,
    SendMoneyModalComponent,
    ConfirmActionComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
