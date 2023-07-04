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

_Here are some common issues & solutions:_

- Creation of a new project takes forever (longer than 3 minutes). That happens on Windows from time to time => Try running the command line as administrator.
- You get an EADDR error (Address already in use). You might already have another ng serve process running - make sure to quit that or use `ng serve --port ANOTHERPORT` to serve your project on a new port.
- My changes are not reflected in the browser (App is not compiling). Check if the window running `ng serve` displays an error. If that's not the case, make sure you're using the latest CLI version and try restarting your CLI.

### Two-Way-Databinding:

For Two-Way-Binding to work, you need to enable the `ngModel` directive. This is done by adding the `FormsModule` to the `imports[]` array in the AppModule.

You then also need to add the import from `@angular/forms` in the `app.module.ts` file:

```ts
import { FormsModule } from '@angular/forms';
```
