import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { StaffComponent } from './staff.component';
import { AddStaffNComponent } from './add-staff-n/add-staff-n.component';
import { EditStaffNComponent } from './edit-staff-n/edit-staff-n.component';
import { ListStaffNComponent } from './list-staff-n/list-staff-n.component';


@NgModule({
  declarations: [
    StaffComponent,
    AddStaffNComponent,
    EditStaffNComponent,
    ListStaffNComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule
  ]
})
export class StaffModule { }