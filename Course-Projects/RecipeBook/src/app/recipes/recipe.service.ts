import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  recipeChanged = new Subject<Recipe[]>();

  // private recipesList: Recipe[] = [
  //   new Recipe(
  //     'Apple - Glazed Roast Pork - Crockpot',
  //     'Another simple crockpot recipe where a pork-loin roast meets a delicious glaze which creates a wonderful dinner you will love.',
  //     'https://c.recipeland.com/images/r/1515/cb5c9d72016753d29df9_1024.webp',
  //     [
  //       new Ingredient('Pork Loin Roast', 4),
  //       new Ingredient('Apple', 2),
  //       new Ingredient('Apple Juice', 1),
  //     ]
  //   ),
  //   new Recipe(
  //     'Baked Chicken Breast Casserole',
  //     "An easy and tasty chicken casserole that's also loaded with chunks of vegetables.",
  //     'https://c.recipeland.com/images/r/16889/fa166583e5e5e49fda9b_1024.webp',
  //     [
  //       new Ingredient('Chicken Breasts', 2),
  //       new Ingredient('Potatoes', 2),
  //       new Ingredient('Carrots', 4),
  //     ]
  //   ),
  //   new Recipe(
  //     'Hyderabadi Chicken Biryani',
  //     'A flavourful and delicious combination of aromatic spices and juicy chicken with perfectly cooked rice.',
  //     'https://c.recipeland.com/images/r/22174/6c1cf49db014a670f44a_1024.webp',
  //     [
  //       new Ingredient('Chicken', 4),
  //       new Ingredient('Onion', 2),
  //       new Ingredient('Biryani Masala', 1),
  //     ]
  //   ),
  // ];

  private recipesList: Recipe[] = [];

  getRecipes() {
    return this.recipesList.slice();
  }

  getRecipe(id) {
    return this.recipesList[id];
  }

  onAddRecipe(newRecipe) {
    this.recipesList.push(newRecipe);
    this.recipeChanged.next(this.recipesList.slice());
  }

  onUpdateRecipe(index: number, updatedRecipe: Recipe) {
    this.recipesList[index] = updatedRecipe;
    this.recipeChanged.next(this.recipesList.slice());
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  deleteRecipe(index: number) {
    this.recipesList.splice(index, 1);
    this.recipeChanged.next(this.recipesList.slice());
  }

  setRecipeList(recipes: Recipe[]) {
    this.recipesList = recipes;
    this.recipeChanged.next(this.recipesList.slice());
  }
}
