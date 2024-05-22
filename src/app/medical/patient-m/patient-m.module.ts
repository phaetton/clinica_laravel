import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientMRoutingModule } from './patient-m-routing.module';
import { PatientMComponent } from './patient-m.component';
import { AddPatientMComponent } from './add-patient-m/add-patient-m.component';
import { EditPatientMComponent } from './edit-patient-m/edit-patient-m.component';
import { ListPatientMComponent } from './list-patient-m/list-patient-m.component';


@NgModule({
  declarations: [
    PatientMComponent,
    AddPatientMComponent,
    EditPatientMComponent,
    ListPatientMComponent
  ],
  imports: [
    CommonModule,
    PatientMRoutingModule
  ]
})
export class PatientMModule { }
