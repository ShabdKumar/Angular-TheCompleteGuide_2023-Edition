# Angular-TheCompleteGuide_2023-Edition

Master Angular (formerly "Angular 2") and build awesome, reactive web apps with the successor of Angular.js

## Getting Started:

### Angular Setup:

- Go to https://nodejs.org/en and download the latest version, make sure that you have the LTS version of NodeJS installed, NOT the latest version.

- Run `[sudo] npm install -g npm` (sudo is only required on Mac/ Linux).

* `[sudo] npm install -g @angular/cli`

### Creation of New Project:

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

### Component Creation:

`ng generate component component_name` --skip-tests

or `ng g c component_name` --skip-tests

**Note:** `--skip-tests` will not generate test file i.e. spec.ts file.

### Two-Way-Databinding:

For Two-Way-Binding to work, you need to enable the `ngModel` directive. This is done by adding the `FormsModule` to the `imports[]` array in the AppModule.

You then also need to add the import from `@angular/forms` in the `app.module.ts` file:

```ts
import { FormsModule } from '@angular/forms';
```

### Directive Creation:

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