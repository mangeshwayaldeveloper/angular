import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { noSpace } from './validators/nospace.validators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customValidations';
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      username: ['', [Validators.required, Validators.minLength(3),noSpace.noSapceValidator]],
      password: ['', Validators.required]
    });
  }

  get username(){
    return this.form.get('username');
  }
  get password(){
    return this.form.get('password');
  }

  protected readonly noSpace = noSpace;
}
