import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recipe } from '../recipes/recipe';
import { HomeserviceService } from './homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  recipe: Recipe[] = [];

  searchRecipe!: FormGroup;

  constructor(
    private Homeservice: HomeserviceService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.Homeservice.getRandomRecipe().subscribe({
      next: (recipe) => {
        this.recipe = recipe;
        console.log(this.recipe);
      },
    });
    this.searchRecipe = this.fb.group({
      query: '',
      type: '',
      diet: '',
    });
  }
  search() {
    const searchForm = this.searchRecipe.getRawValue();
    console.log(searchForm);
    const data = {
      query: searchForm.query,
      type: searchForm.type,
      diet: searchForm.diet,
    };
    this.Homeservice.searchRecipe(data).subscribe((res: any) => {
      console.log(res);
      this.recipe = Object(res).results;
    });
  }
  getOneRecipe(recipeid: number) {
    console.log(recipeid);
  }
}
