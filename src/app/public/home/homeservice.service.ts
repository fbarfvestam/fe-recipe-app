import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Recipe } from '../recipes/recipe';

@Injectable({
  providedIn: 'root',
})
export class HomeserviceService {
  private apiUrl = `https://api.spoonacular.com/recipes/`;
  private apiKey = `1aff96e4bf944c50acb3058215e79391`;

  recipes: Recipe[] = [];

  /*   random: string = `${this.apiUrl}complexSearch?apiKey=${}&query=${}&type=${}&diet=${}` */

  constructor(private httpClient: HttpClient) {}

  getRandomRecipe(): Observable<Recipe[]> {
    return this.httpClient
      .get<any>(`${this.apiUrl}random?apiKey=${this.apiKey}&number=2`)
      .pipe(map((result) => result.recipes));
  }

  searchRecipe(data: any): Observable<Recipe[]> {
    return this.httpClient.get<any>(
      `${this.apiUrl}complexSearch?apiKey=${this.apiKey}&query=${data.query}&type=${data.type}&diet=${data.diet}`
    );
  }
}
