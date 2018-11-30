import { Injectable } from '@angular/core';
import {Http, Response,Headers, RequestOptions} from '@angular/http';
import {hostname} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  option:any;
  
  constructor(private http:Http) {
    let headers= new Headers;
    headers.append('content-type','application/json');
    this.option=new RequestOptions({headers:headers});
   }
   
   get(endpoint){
     return new Promise((response,reject)=>{
      this.http.get(hostname+endpoint).subscribe((res)=>{
        response(res.json())
      },(err)=>{
        reject(err.json())
      })
     });
   }

   post(endpoint,body){
    return new Promise((response,reject)=>{
      this.http.post(hostname+endpoint,body,this.option).subscribe((res)=>{
        response(res.json())
      },(err)=>{
        reject(err.json())
      })
    });
   }
}
