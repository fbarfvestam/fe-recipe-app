import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Recipe } from './recipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
/*   'https://api.spoonacular.com/recipes/random?apiKey=1aff96e4bf944c50acb3058215e79391&number=2' */

  private apiUrl = `https://api.spoonacular.com/recipes/`;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
   }

  constructor(private httpClient:HttpClient) { }

/*   getRandomRecipe():Observable<object> 
  {
    return this.httpClient.get<object>(`${this.apiUrl}random?apiKey=1aff96e4bf944c50acb3058215e79391&number=2`, this.httpOptions)
  } */
}
