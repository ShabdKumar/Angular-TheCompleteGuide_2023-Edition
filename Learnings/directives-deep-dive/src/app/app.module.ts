import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { MouseOverHighlightDirective } from './mouse-over-highlight/mouse-over-highlight.directive';
import { MouseOverBetterHighlightDirective } from './mouse-over-better-highlight/mouse-over-better-highlight.directive';
import { UnlessDirective } from './unless/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    MouseOverHighlightDirective,
    MouseOverBetterHighlightDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
