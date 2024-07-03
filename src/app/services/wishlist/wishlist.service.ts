import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  token: any;

  constructor(private http:HttpService) {
    this.token=localStorage.getItem('token');
  }
  
  AddToWishList(data:any){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.postMethodReset('https://localhost:44305/api/WishLists/add-wishlist?bookId='+data.id, {}, true, head);
  }

  GetWishListItemsByUser(){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.http.getMethod(`https://localhost:44305/api/WishLists/GetUserWishlistDetails`,true,head)
  }
}
