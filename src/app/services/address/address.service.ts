import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token');
  }

  AddAddress(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postMethodReset('https://localhost:44305/api/Addresses/add', data, true, head);
  }

  GetAddressesOfUser(){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getMethod(`https://localhost:44305/api/Addresses/GetAddressesByUserId`,true,head)
  }

  UpdateAddress(data:any){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putMethod(`https://localhost:44305/api/Addresses/update`,data,true,head)
  }
}
