import { Component } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {

  constructor(private shoppingListService: ShoppingListService) {}

  onAdd(name, amount) {
    this.shoppingListService.onAddingIngredient(new Ingredient(name.value, amount.value));
  }

  onRemove() {}

  onClear() {}
}
