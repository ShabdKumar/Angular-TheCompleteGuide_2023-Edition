# Angular-TheCompleteGuide_2023-Edition

Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js

## Angular Setup:

- Go to https://nodejs.org/en and download the latest version, make sure that you have the LTS version of NodeJS installed, NOT the latest version.

- Run `[sudo] npm install -g npm` (sudo is only required on Mac/ Linux).

* `[sudo] npm install -g @angular/cli`

## Creation of New Project:

- `ng new project_name --no-strict`

* Go inside your repository: `cd project_name`

* For continous running your project in background: `ng serve`

**_Here are some common issues & solutions:_**

- Creation of a new project takes forever (longer than 3 minutes). That happens on Windows from time to time => Try running the command line as administrator.
- You get an EADDR error (Address already in use). You might already have another ng serve process running - make sure to quit that or use `ng serve --port ANOTHERPORT` to serve your project on a new port.
- My changes are not reflected in the browser (App is not compiling). Check if the window running `ng serve` displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI.

### Bootstrap styling in project:

`npm install --save bootstrap@3`

Update style in angular.json file:

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
```

## Component Creation:

`ng generate component component_name` --skip-tests

or `ng g c component_name` --skip-tests

**Note:** `--skip-tests` will not generate test file i.e. spec.ts file.

### Two-Way-Databinding:

For Two-Way-Binding to work, you need to enable the `ngModel` directive. This is done by adding the `FormsModule` to the `imports[]` array in the AppModule.

You then also need to add the import from `@angular/forms` in the `app.module.ts` file:

```ts
import { FormsModule } from '@angular/forms';
```

## Directive Creation:

`ng generate directive directive_name` --skip-tests

or `ng g d directive_name` --skip-tests

### Dropdown Directives:

If you want that a dropdown can also be closed by a click anywhere outside (which also means that a click on one dropdown closes any other one, btw.), replace the code of `dropdown.directive.ts`

```ts
import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef: ElementRef) {}
}
```

## Services in Angular 6+

If you're using Angular 6+, you can provide application-wide services in a different way.

Instead of adding a service class to the `providers[]` array in `AppModule` , you can set the following config in `@Injectable()` :

```ts
@Injectable({providedIn: 'root'})
export class MyService { ... }
```

This is exactly the same as:

```ts
export class MyService { ... }
```
```ts
import { MyService } from './path/to/my.service';
@NgModule({
    ...
    providers: [MyService]
})
export class AppModule { ... }
```
Using this new syntax is **completely optional**, the traditional syntax (using `providers[]` ) will still work. The "new syntax" does offer one advantage though: Services **can be loaded lazily** by Angular (behind the scenes) and redundant code can be removed automatically. This can lead to a better performance and loading speed - though this really only kicks in for bigger services and apps in general.

## Redirection Path Matching

By default, Angular matches paths by prefix. That means, that the following route will match both `/recipes` and just `/`

```ts
{ path: '', redirectTo: '/somewhere-else' }
```

Actually, Angular will give you an error here, because that's a common gotcha: This route will now **ALWAYS** redirect you! Why?

Since the default matching strategy is `"prefix"` , Angular checks if the path you entered in the URL does **start with the path** specified in the route. Of course every path starts with `''` (Important: That's no whitespace, it's simply "nothing").

To fix this behavior, you need to change the matching strategy to `"full"` :

```ts
{ path: '', redirectTo: '/somewhere-else', pathMatch: 'full' }
```
Now, you only get redirected, if the full path is `''` .

## Observables: Install RxJS

In order to follow along smoothly with the course examples, make sure you install RxJS by running

`npm install --save rxjs@latest`

Official Docs: https://rxjs-dev.firebaseapp.com/

RxJS Series: https://academind.com/learn/javascript/understanding-rxjs/

Updating to RxJS 6: https://academind.com/learn/javascript/rxjs-6-what-changed/

## Built-in Validators & Using HTML5 Validation:

Which Validators do ship with Angular? 

Check out the Validators class: https://angular.io/api/forms/Validators - these are all built-in validators, though that are the methods which actually get executed (and which you later can add when using the reactive approach).

For the template-driven approach, you need the directives. You can find out their names, by searching for "validator" in the official docs: https://angular.io/api?type=directive - everything marked with "D" is a directive and can be added to your template.

Additionally, you might also want to enable HTML5 validation (by default, Angular disables it). You can do so by adding the `ngNativeValidate`  to a control in your template.

## HTTP Requests:

**Building a restAPI:**- https://academind.com/tutorials/building-a-restful-api-with-nodejs

**Securing JS Code:**- https://academind.com/tutorials/hide-javascript-code