import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { AddAppointmentsComponent } from './add-appointments/add-appointments.component';
import { AtencionMedicalComponent } from './atencion-medical/atencion-medical.component';
import { EditAppointmentsComponent } from './edit-appointments/edit-appointments.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { ListAppointmentPayComponent } from './list-appointment-pay/list-appointment-pay.component';


@NgModule({
  declarations: [
    AppointmentComponent,
    AddAppointmentsComponent,
    AtencionMedicalComponent,
    EditAppointmentsComponent,
    ListAppointmentsComponent,
    ListAppointmentPayComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule
  ]
})
export class AppointmentModule { }
