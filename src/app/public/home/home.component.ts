import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe';
import { HomeserviceService } from './homeservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipe:Recipe[]=[];

  constructor(private Homeservice:HomeserviceService) { }

  ngOnInit(): void {
    this.Homeservice.getRandomRecipe().subscribe({
      next: (recipe)=>{
        this.recipe = recipe;
        console.log(this.recipe);
      }
    })
  }

}
