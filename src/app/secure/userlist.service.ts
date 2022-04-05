import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userlist } from './userlist';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
      /* Authorization: `Bearer ${localStorage.getItem('token')}`, */
    }),
  };

  constructor(private http:HttpClient) { }
  createList(Userlist:any):Observable<Userlist> 
  {
    return this.http.post<Userlist>(`http://localhost:8000/api/create-list/1`, JSON.stringify(Userlist), this.httpOptions);
  }
}
