import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data/data.service';
import { RolesService } from '../service/roles.service';

@Component({
  selector: 'app-add-role-user',
  templateUrl: './add-role-user.component.html',
  styleUrls: ['./add-role-user.component.scss']
})
export class AddRoleUserComponent implements OnInit {
  sideBar: any = [];
  name: string = '';
  permission: any = [];
  valid_form: boolean = false;
  constructor(
    public DataService: DataService,
    public roleService: RolesService
  ) {

  }

  ngOnInit(): void {
    this.sideBar = this.DataService.sideBar[0].menu;
  }


  addPermission(subMenu: any) {
    let INDEX = this.permission.findIndex((item: any) => item == subMenu.permision);

    if (INDEX != -1) {
      this.permission.splice(INDEX, 1);
    } else {
      this.permission.push(subMenu.permision);
    }

    console.log(this.permission);

  }

  save() {
    this.valid_form = false; 
    console.log("Enviando",this.name ,this.permission);
    
    if (!this.name || !this.permission) {
      this.valid_form = true;
      return;
    }
    let data = {
      name: this.name,
      permisions: this.permission
    };
    this.roleService.storeRoles(data).subscribe((resp: any) => {
      console.log(resp);
    })
  }
}
