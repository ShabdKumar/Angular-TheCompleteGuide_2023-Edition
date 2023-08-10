import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  isSubmitted = false;
  defaultSubscription = 'Advanced';
  subscriptions = ['Basic', 'Pro', 'Advanced'];
  user = {
    email: '',
    subscription: '',
    password: '',
  };

  onSubmit() {
    // if (!this.subscriptionForm.valid) {
    //   this.subscriptionForm.controls['email'].markAsTouched();
    //   this.subscriptionForm.controls['password'].markAsTouched();
    //   return;
    // }
    this.user.email = this.subscriptionForm.value.email;
    this.user.subscription = this.subscriptionForm.value.subscription;
    this.user.password = this.subscriptionForm.value.password;
    this.isSubmitted = true;
    console.log(this.subscriptionForm.value);
    this.subscriptionForm.reset();

    console.log(
      `User Details:\nEmail: ${this.user.email}\nSubscription: ${this.user.subscription}\nPassword: ${this.user.password}`
    );
  }
}
