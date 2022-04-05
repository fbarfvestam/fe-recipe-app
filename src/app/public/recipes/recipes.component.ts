import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipe:Recipe[]=[];

  constructor(private RecipeService:RecipesService) { }

  ngOnInit(): void {
  }

}
