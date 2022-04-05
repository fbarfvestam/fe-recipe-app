import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe';

@Injectable({
  providedIn: 'root'
})
export class HomeserviceService {

  private apiUrl = `https://api.spoonacular.com/recipes/`;

  recipes:Recipe[]=[]

  constructor(private httpClient:HttpClient) { }

  getRandomRecipe():Observable<Recipe[]> 
  {
    return this.httpClient.get<any>(`${this.apiUrl}random?apiKey=1aff96e4bf944c50acb3058215e79391&number=2`).pipe(map((result) => result.recipes))
    
  }

}
