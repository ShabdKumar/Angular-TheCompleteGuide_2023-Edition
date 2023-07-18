import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipesList: Recipe[] = [
    new Recipe(
      'Dummy Recipe',
      'Just for Test Purpose',
      'https://st2.depositphotos.com/3889193/7173/i/450/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg'
    ),
    new Recipe(
      'Dummy Recipe1',
      'Just for Test Purpose1',
      'https://st2.depositphotos.com/3889193/7173/i/450/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg'
    ),
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
