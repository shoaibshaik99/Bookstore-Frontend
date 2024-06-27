import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }

  postMethod(url:string, payload:any, token:boolean=false, httpOptions:any={}){
    return this.http.post(url,payload,token && httpOptions);
  }

  postMethodReset(url:string, payload:any, token:boolean=true, httpOptions:any={}){
    return this.http.post(url,payload,token && httpOptions);
  }

  getMethod(url:string, token:boolean=true, httpOptions:any={}){
    return this.http.get(url,token && httpOptions);
  }

  getMethodReset(url:string, token:boolean=false, httpOptions:any={}){
    return this.http.get(url,token && httpOptions);
  }

  putMethod(url: string, reqData: any, token:boolean=true, httpOptions: any={}){
    console.log( reqData)
    return this.http.put(url, reqData, token && httpOptions)
  }

  deleteMethod(url: string, token:boolean=true, httpOptions: any={}){
    return this.http.delete(url, token && httpOptions)
  }
}
