import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent  implements OnInit{
  sideBar:any=[];
  constructor(
    public DataService:DataService
  ){

  }

  ngOnInit():void{
    this.sideBar= this.DataService.sideBar[0].menu;
  }
}
