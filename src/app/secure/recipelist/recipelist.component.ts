import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeserviceService } from 'src/app/public/home/homeservice.service';
import { Userlist } from '../userlist';
import { UserlistService } from '../userlist.service';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css'],
})
export class RecipelistComponent implements OnInit {
  recipeListTitle: string = '';
  recipeListId!: number;
  listRecipes: Userlist[] = [];

  constructor(
    private route: ActivatedRoute,
    private userListService: UserlistService
  ) {}

  ngOnInit(): void {
    this.recipeListTitle = this.route.snapshot.params['listname'];
    this.recipeListId = this.route.snapshot.params['recipelist'];
    this.userListService
      .getListRecipes(this.recipeListId)
      .subscribe((res: Userlist[]) => {
        this.listRecipes = res;
        console.log(this.listRecipes);
      });
  }
  deleteFromList(id: number) {
    this.userListService.deleteRecipeFromList(id).subscribe((res) => {
      this.listRecipes = this.listRecipes.filter((item) => item.id !== id);
      console.log('recipe deleted');
    });
  }
}
