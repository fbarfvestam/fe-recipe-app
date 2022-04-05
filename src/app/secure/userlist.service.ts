import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userlist } from './userlist';

@Injectable({
  providedIn: 'root'
})
export class UserlistService {

  constructor(private http:HttpClient) { }
  createList(Userlist:any):Observable<Userlist> 
  {
    return this.http.post<Userlist>(`http://localhost:8000/api/create-list`, JSON.stringify(Userlist));
  }
}
