import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css'],
})
export class RecipeComponent implements OnInit {
  recipeid!: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.recipeid = this.route.snapshot.params['id'];
    console.log(this.recipeid);
  }
}
