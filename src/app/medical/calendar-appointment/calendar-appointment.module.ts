import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarAppointmentRoutingModule } from './calendar-appointment-routing.module';
import { CalendarAppointmentComponent } from './calendar-appointment.component';


@NgModule({
  declarations: [
    CalendarAppointmentComponent
  ],
  imports: [
    CommonModule,
    CalendarAppointmentRoutingModule
  ]
})
export class CalendarAppointmentModule { }
