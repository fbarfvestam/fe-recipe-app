import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Userlist } from 'src/app/secure/userlist';
import { UserlistService } from 'src/app/secure/userlist.service';
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
  public loggedIn!: boolean;
  recipeid!: number;
  Userlist: Userlist[] = [];

  constructor(
    private route: ActivatedRoute,
    private homeService: HomeserviceService,
    private Userlistservice: UserlistService
  ) {}

  ngOnInit(): void {
    this.recipeid = this.route.snapshot.params['id'];
    console.log(this.recipeid);
    this.homeService.getRecipeById(this.recipeid).subscribe((res: any) => {
      this.recipe = res;
      console.log(this.recipe.id);
    });
    this.loggedIn = localStorage.getItem('token') !== null;
    this.Userlistservice.showList().subscribe((res: any) => {
      this.Userlist = res;
      console.log(this.Userlist);
    });
  }
  addRecipe(recipe: string, recipeid: number, userlistid: number) {
    const data = {
      recipe: recipe,
      recipe_id: recipeid,
      userlistid: userlistid,
    };
    console.log(data);
    this.Userlistservice.addRecipeToList(data).subscribe((res: any) => {
      console.log(res);
    });
  }
}
