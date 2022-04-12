import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Recipe } from '../recipes/recipe';

@Injectable({
  providedIn: 'root',
})
export class HomeserviceService {
  private apiUrl = `https://api.spoonacular.com/recipes/`;
  private apiKey!: string;

  recipes: Recipe[] = [];

  constructor(private httpClient: HttpClient) {
    this.apiKey = environment.API_KEY;
  }

  getRandomRecipe(): Observable<Recipe[]> {
    return this.httpClient
      .get<any>(`${this.apiUrl}random?apiKey=${this.apiKey}&number=8`)
      .pipe(map((result) => result.recipes));
  }

  searchRecipe(data: any): Observable<Recipe[]> {
    return this.httpClient.get<any>(
      `${this.apiUrl}complexSearch?apiKey=${this.apiKey}&query=${data.query}&type=${data.type}&diet=${data.diet}`
    );
  }

  getRecipeById(recipeid: number) {
    return this.httpClient.get<any>(
      `${this.apiUrl}${recipeid}/information?apiKey=${this.apiKey}`
    );
  }
}
