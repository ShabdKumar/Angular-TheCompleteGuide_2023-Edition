import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['Male', 'Female'];
  isSubmitted = false;
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: '',
  };

  onSuggestUserName() {
    const suggestedName = 'Superuser';
    // this.signUpForm.setValue({
    //   userModel: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'teacher',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });
    this.signUpForm.form.patchValue({
      userModel: {
        username: 'Whatsup homies',
      },
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    // console.log(this.signUpForm);
    this.isSubmitted = true;
    this.user.username = this.signUpForm.value.userModel.username;
    this.user.email = this.signUpForm.value.userModel.email;
    this.user.question = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset();
  }
}
