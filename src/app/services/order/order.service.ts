import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token');
  }
  
  PlaceOrder(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postMethodReset('https://localhost:44305/api/Orders/AddOrder', data, true, head);
  }

  GetOrdersByUser(){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getMethod(`https://localhost:44305/api/Orders/GetOrdersByUser`,true,head)
  }

  getAllOrders(){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.http.getMethodReset(`https://localhost:44305/api/Orders/getAllOrders`,false,head)
  }
}
