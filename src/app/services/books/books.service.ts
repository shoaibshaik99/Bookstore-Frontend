import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private httpService:HttpService) {}

  GetAllBooks(){
    let head={
      headers: new HttpHeaders({
        'content-type':'application/json'
      })
    }
    return this.httpService.getMethodReset(`https://localhost:44305/api/Books/all-books`,false,head);
  }
  GetBookById(data:any){
    let head={
      headers: new HttpHeaders({
        'Content-type':'application/json'
      })
    }
    return this.httpService.getMethodReset(`https://localhost:44305/api/Books/`+data,false,head)
  }
}
  