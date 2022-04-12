import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  apiUrl: string = 'https://recipeappfb.herokuapp.com/api';

  constructor(private http: HttpClient, private router: Router) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };
  login(formData: object) {
    return this.http.post(`${this.apiUrl}/login`, formData);
  }
  signOut() {
    return this.http.post(`${this.apiUrl}/logout`, null, this.httpOptions);
  }
}
