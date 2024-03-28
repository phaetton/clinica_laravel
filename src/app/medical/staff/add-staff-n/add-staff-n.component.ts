import { Component } from '@angular/core';

@Component({
  selector: 'app-add-staff-n',
  templateUrl: './add-staff-n.component.html',
  styleUrls: ['./add-staff-n.component.scss']
})
export class AddStaffNComponent {
  public selectedValue !: string  ;

  public name:string='';
  public surname:string='';
  public mobile:string='';
  public email:string='';
  public password:string='';
  public password_confirmation:string='';
  public birth:string='';
  public gender:number=1;
  public education:string='';
  public designation:string='';
  public address:string='';
}
