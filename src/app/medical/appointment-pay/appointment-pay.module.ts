import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentPayRoutingModule } from './appointment-pay-routing.module';
import { AppointmentPayComponent } from './appointment-pay.component';
import { ListAppointmentPayComponent } from './list-appointment-pay/list-appointment-pay.component';


@NgModule({
  declarations: [
    AppointmentPayComponent,
    ListAppointmentPayComponent
  ],
  imports: [
    CommonModule,
    AppointmentPayRoutingModule
  ]
})
export class AppointmentPayModule { }
