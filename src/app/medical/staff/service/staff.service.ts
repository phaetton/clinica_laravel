import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';
import { URL_SERVICIOS } from 'src/config/config';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(
    public http: HttpClient,
    public authService: AuthService
  ) { }

  listUsers() {
    let headers = new HttpHeaders({ 'Authorization': 'Bearer' + this.authService.token });
    let URL = URL_SERVICIOS+"staffs";
    return this.http.get(URL,{headers:headers});
  }
}
