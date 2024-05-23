import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarAppointmentRoutingModule } from './calendar-appointment-routing.module';
import { CalendarAppointmentComponent } from './calendar-appointment.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppointmentCalendarComponent } from './appointment-calendar/appointment-calendar.component';


@NgModule({
  declarations: [
    CalendarAppointmentComponent,
    AppointmentCalendarComponent
  ],
  imports: [
    CommonModule,
    CalendarAppointmentRoutingModule,
       //
       FormsModule,
       ReactiveFormsModule,
       HttpClientModule,
       RouterModule,
       SharedModule
  ]
})
export class CalendarAppointmentModule { }
