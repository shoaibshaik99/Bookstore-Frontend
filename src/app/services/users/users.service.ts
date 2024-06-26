import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpService:HttpService) { }

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
}
