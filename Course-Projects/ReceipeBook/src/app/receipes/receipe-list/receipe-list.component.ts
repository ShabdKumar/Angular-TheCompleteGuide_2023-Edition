import { Component } from '@angular/core';
import { Receipes } from '../receipes.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css'],
})
export class ReceipeListComponent {
  receipesList: Receipes[] = [
    new Receipes(
      'Dummy Receipe',
      'Just for Test Purpose',
      'https://st2.depositphotos.com/3889193/7173/i/450/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg'
    ),
    new Receipes(
      'Dummy Receipe1',
      'Just for Test Purpose1',
      'https://st2.depositphotos.com/3889193/7173/i/450/depositphotos_71739083-stock-photo-healthy-vegetarian-home-made-food.jpg'
    ),
  ];
}
