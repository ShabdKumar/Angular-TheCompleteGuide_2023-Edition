import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeBook';
  impFeature = 'recipe';

  onNavigation(impFeature: string) {
      this.impFeature = impFeature;
  }
}
