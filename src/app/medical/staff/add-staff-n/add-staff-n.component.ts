import { Component } from '@angular/core';
import { StaffService } from '../service/staff.service';

@Component({
  selector: 'app-add-staff-n',
  templateUrl: './add-staff-n.component.html',
  styleUrls: ['./add-staff-n.component.scss']
})
export class AddStaffNComponent {
  public selectedValue !: string;
  public name: string = '';
  public surname: string = '';
  public mobile: string = '';
  public email: string = '';
  public password: string = '';
  public password_confirmation: string = '';
  public birth_date: string = '';
  public gender: number = 1;
  public education: string = '';
  public designation: string = '';
  public address: string = '';
  public roles: any = [];

  constructor(public staffService: StaffService) { }
  ngOnInit(): void {
    this.staffService.listConfig().subscribe((resp: any) => {
      console.log(resp);
      this.roles = resp.roles;
    })
  }
<<<<<<< Updated upstream
=======

  loadFile($event: any) {
    if ($event.target.files[0].type.indexOf("image") < 0) {
      // alert("SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN");
      this.text_validation = "SOLAMENTE PUEDEN SER ARCHIVOS DE TIPO IMAGEN";
      return;
    }
    this.text_validation = '';
    this.FILE_AVATAR = $event.target.files[0];

    //convirtiendo a base64
    let reader = new FileReader();
    reader.readAsDataURL(this.FILE_AVATAR);
    reader.onloadend = () => this.IMAGEN_PREVIZUALIZA = reader.result;
  }

  save(){
    console.log(this.selectedValue);

  }
>>>>>>> Stashed changes
}
