import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private httpService:HttpService) { }

  GetCartByUserId(){
    let header ={head:new HttpHeaders({
      'Content-type':'application/json'
    })};
    return this.httpService.postMethod('https://localhost:44305/api/Carts/user-cart/',{},false,header);
  }
}
