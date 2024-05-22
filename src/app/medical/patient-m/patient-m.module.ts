import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientMRoutingModule } from './patient-m-routing.module';
import { PatientMComponent } from './patient-m.component';
import { AddPatientMComponent } from './add-patient-m/add-patient-m.component';
import { EditPatientMComponent } from './edit-patient-m/edit-patient-m.component';
import { ListPatientMComponent } from './list-patient-m/list-patient-m.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    PatientMComponent,
    AddPatientMComponent,
    EditPatientMComponent,
    ListPatientMComponent
  ],
  imports: [
    CommonModule,
    PatientMRoutingModule,

    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class PatientMModule { }
