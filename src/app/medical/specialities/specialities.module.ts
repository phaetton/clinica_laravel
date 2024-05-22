import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { SpecialitiesComponent } from './specialities.component';
import { AddSpecialitieComponent } from './add-specialitie/add-specialitie.component';
import { EditSpecialitieComponent } from './edit-specialitie/edit-specialitie.component';
import { ListSpecialitieComponent } from './list-specialitie/list-specialitie.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SpecialitiesComponent,
    AddSpecialitieComponent,
    EditSpecialitieComponent,
    ListSpecialitieComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,


    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class SpecialitiesModule { }
