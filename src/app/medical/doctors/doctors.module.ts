import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';
import { DoctorsComponent } from './doctors.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ListDoctorComponent } from './list-doctor/list-doctor.component';


@NgModule({
  declarations: [
    DoctorsComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ListDoctorComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule
  ]
})
export class DoctorsModule { }
