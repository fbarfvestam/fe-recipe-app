import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from '../home/homeservice.service';
import { Recipe } from './recipe';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipe!: Recipe;

  recipeid!: number;

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeserviceService
  ) {}

  ngOnInit(): void {
    this.recipeid = this.route.snapshot.params['id'];
    console.log(this.recipeid);
    this.homeService.getRecipeById(this.recipeid).subscribe((res: any) => {
      this.recipe = res;
      console.log(this.recipe.id);
    });
  }
}
