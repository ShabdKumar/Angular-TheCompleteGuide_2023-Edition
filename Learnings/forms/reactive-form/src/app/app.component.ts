import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['Male', 'Female'];
  signUpForm: FormGroup;
  forbidNames = ['Shabd', 'Bhuvan'];

  ngOnInit() {
    this.signUpForm = new FormGroup({
      userData: new FormGroup({
        username: new FormControl(null, [
          Validators.required,
          this.forbiddenNames.bind(this),
        ]),
        email: new FormControl(
          null,
          [Validators.required, Validators.email],
          this.forbiddenEmails.bind(this),
        ),
      }),
      gender: new FormControl('Male'),
      hobbies: new FormArray([]),
    });

    /* valueChanges and statusChanges*/

    // this.signUpForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // });

    // this.signUpForm.statusChanges.subscribe((status) => {
    //   console.log(status);
    // });
  }

  onSubmit() {
    console.log(this.signUpForm);

    /* setValue and patchValue*/

    // this.signUpForm.setValue({
    //   userData: { username: 'Shabd', email: 'shabdsahu@hotmail.com' },
    //   gender: 'Male',
    //   hobbies: [],
    // });
    // this.signUpForm.patchValue({
    //   userData: { username: 'Aman' },
    // });
  }

  onAddingHobbies() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  getControls() {
    return (this.signUpForm.get('hobbies') as FormArray).controls;
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } {
    if (this.forbidNames.indexOf(control.value) !== -1) {
      return { 'Username is Forbidden': true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        }
        resolve(null);
      }, 5000);
    });
    return promise;
  }
}
