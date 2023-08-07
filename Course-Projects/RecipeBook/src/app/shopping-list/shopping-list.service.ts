import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingListService {
  ingredientsChange = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Bananas', 8),
  ];

  onAddingIngredient(ingred: Ingredient) {
    this.ingredients.push(ingred);
    this.ingredientsChange.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredient: Ingredient[]) {
    this.ingredients.push(...ingredient);
    this.ingredientsChange.next(this.ingredients.slice());
  }
}
