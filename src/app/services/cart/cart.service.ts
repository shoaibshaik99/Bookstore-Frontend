import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  token:any
  constructor(private http:HttpService) { this.token=localStorage.getItem('token') }
  AddCart(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postMethodReset(`https://localhost:44305/api/Cart/AddBookToCart?bookId=`+data.bookId,{},true,head);
  }

  GetCartByUserId()
  {
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getMethod(`https://localhost:44305/api/Carts/GetUserCartDetails`,true,head);
  }

  updateQuantity(data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.putMethod(`https://localhost:44305/api/Cart/UpdateQuantity`,data,true,head);
  }
  removeCart(data:any){
    let head={
      headers:new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.deleteMethod(`https://localhost:44305/api/Cart/RemoveBookFromCart?cartId=`+data,true,head);
  }
}
