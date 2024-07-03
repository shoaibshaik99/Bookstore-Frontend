import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  token: any;

  constructor(private httpService:HttpService) {
    this.token=localStorage.getItem('token');
   }

  Login(data:any){
    let header ={head:new HttpHeaders({
      'Content-type':'application/json'
    })};
    return this.httpService.postMethod('https://localhost:44305/api/Users/login',data,false,header);
  }

  register(data: any){
    let header ={head:new HttpHeaders({
      'Content-type':'application/json'
    })};
    return this.httpService.postMethod('https://localhost:44305/api/Users/register',data,false,header)
  }

  FetchUserDetails(){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getMethod(`https://localhost:44305/api/Users/GetUserById`,true,head)
  }

  UpdateUserDetails(data:any){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putMethod(`https://localhost:44305/api/Users/UpdateUser`,data,true,head)
  }
}
