import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  onAdd(name, amount) {
    const ingredient = new Ingredient(name.value, amount.value);
    this.ingredientAdded.emit(ingredient);
  }

  onRemove() {

  }

  onClear() {

  }
}
