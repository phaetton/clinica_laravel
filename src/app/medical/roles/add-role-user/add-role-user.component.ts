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
  valid_form_success: boolean = false;
  text_validation: any = null;
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
    if (!this.name || this.permission == 0) {
      this.valid_form = true;
      return;
    }
    let data = {
      name: this.name,
      permisions: this.permission
    };

    this.valid_form_success = false;
    this.text_validation = null;
    this.roleService.storeRoles(data).subscribe((resp: any) => {
      console.log(resp);
      if (resp.message == 403) {
        this.text_validation = resp.message_text;
      } else {

        this.name = '';
        this.permission = [];
        this.valid_form_success = true;

        let SIDE_BAR = this.sideBar;
        this.sideBar = [];
        setTimeout(
          () => { this.sideBar = SIDE_BAR; }
          , 50)
      }
    })
  }
}
