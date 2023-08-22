import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') f: NgForm;
  subscription: Subscription;
  editingIngredient: Ingredient;
  editMode: boolean = false;
  editingIngredientIndex: number;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editingIngredientIndex = index;
        this.editingIngredient = this.shoppingListService.getIngredient(index);
        this.f.setValue({
          name: this.editingIngredient.name,
          amount: this.editingIngredient.amount,
        });
      }
    );
  }

  onAddOrUpdate() {
    const value = this.f.value;
    const ingredient = new Ingredient(value.name, value.amount);
    this.editMode
      ? this.shoppingListService.onUpdatingIngredient(
          this.editingIngredientIndex,
          ingredient
        )
      : this.shoppingListService.onAddingIngredient(ingredient);

    this.onClear();
  }

  onRemove() {
    if (this.editingIngredientIndex !== null) {
      this.shoppingListService.deleteIngredient(this.editingIngredientIndex);
    }
    this.onClear();
  }

  onClear() {
    this.f.reset();
    this.editMode = false;
    this.editingIngredientIndex = null;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
