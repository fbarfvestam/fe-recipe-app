import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Userlist } from './userlist';

@Injectable({
  providedIn: 'root',
})
export class UserlistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      /* Authorization: `Bearer ${localStorage.getItem('token')}`, */
    }),
  };

  constructor(private http: HttpClient) {}
  createList(Userlist: any): Observable<Userlist> {
    return this.http.post<Userlist>(
      `http://localhost:8000/api/create-list/${localStorage.getItem('id')}`,
      JSON.stringify(Userlist),
      this.httpOptions
    );
  }

  showList(): Observable<Userlist[]> {
    return this.http.get<Userlist[]>(
      `http://localhost:8000/api/get-list/${localStorage.getItem('id')}`,
      this.httpOptions
    );
  }

  deleteList(id: number) {
    return this.http.delete<Userlist[]>(
      `http://localhost:8000/api/delete-list/${id}`,
      this.httpOptions
    );
  }

  getListRecipes(id: number) {
    return this.http
      .get<any>(`http://localhost:8000/api/get-recipe/${id}`, this.httpOptions)
      .pipe(map((res) => res.message));
  }

  addRecipeToList(data: any) {
    return this.http.post<Userlist>(
      `http://localhost:8000/api/recipe-list/${data.userlistid}`,
      JSON.stringify(data),
      this.httpOptions
    );
  }
}
