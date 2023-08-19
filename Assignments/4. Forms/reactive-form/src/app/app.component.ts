import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  projectStatusForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];
  defaultStatus = 'Stable';

  ngOnInit() {
    this.projectStatusForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        this.forbiddenName.bind(this),
      ]),
      email: new FormControl(
        null,
        [Validators.required, Validators.email],
        this.forbiddenEmails.bind(this)
      ),
      projectStatus: new FormControl(null),
    });

    this.projectStatusForm.patchValue({
      projectStatus: this.defaultStatus,
    });
  }

  onSubmit() {
    console.log(this.projectStatusForm);
    alert('Your Form is submitted.');
  }

  onReset() {
    this.projectStatusForm.reset();
  }

  forbiddenName(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return { projectNameIsForbidden: true };
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
      }, 1000);
    });
    return promise;
  }
}