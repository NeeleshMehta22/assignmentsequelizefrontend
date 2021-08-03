import { Injectable } from '@angular/core';
import {Iroutes} from '../modal/routes.modal'
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import { Iusers } from '../modal/user.modal';
import { Observable , throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements Iroutes{
  private baseurl = 'http://localhost:8080';

  constructor(private http:HttpClient) { }

  // private Errorhandle(error:HttpErrorResponse){

  // }




  createuser(user:Iusers):Observable<Iusers>{
    return this.http.post<Iusers>(`${this.baseurl}` + `/api/user/create`,user)
  }

  getuser():Observable<any>{
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  

    return this.http.get(`${this.baseurl}` + `/api/user/get`,{'headers':headers})

  }

  getuserbyid(id:number):Observable<any>{

    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  

    return this.http.get(`${this.baseurl}` + `/api/user/` + id,{'headers':headers})

  }

  updateuser(user:any):Observable<Iusers>{
    return this.http.put<Iusers>(`${this.baseurl}` + `/api/user/create/` + user.id , user)
  }

  deleteuser(user:Iusers):Observable<Iusers>{
    const headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*',
    'content-type': 'application/json'});
  
    return this.http.delete<Iusers>(`${this.baseurl}` + `/api/user/create/` + user.id,{headers:headers})
  }


}
