import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  apiUrl:string = 'http://127.0.0.1:8000/api'

  constructor(private http: HttpClient) { }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    })
  }
  login(formData:object) {
    return this.http.post(`${this.apiUrl}/login`, formData)
  }

}


