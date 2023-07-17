import {Component} from '@angular/core';
import {FormArray, NgForm, Validators} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";
import {FormBuilder} from "@angular/forms";
import {findUp} from "@angular/cli/src/utilities/find-up";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactiveFormPro';
  form: any;
  pattern = "[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$";
  contactPattern = "[789][0-9]{10}";

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      fullname: ['',
        [
          Validators.required,
          Validators.minLength(5)
        ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      contactDetails: fb.group({
        address: ['', [Validators.required],
          [Validators.minLength(5)]],
        shippingAddress: ['', [Validators.required, Validators.minLength(5)]],
        contactNumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.contactPattern)]]
      }),
      skills: fb.array([])
    })
  }

  //   this.form = new FormGroup({
  //     fullName: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //     email: new FormControl("", [Validators.required, Validators.pattern(this.pattern)]),
  //     contactDetails: new FormGroup({
  //         address: new FormControl("", [Validators.required, Validators.minLength(5)]),
  //         shippingAddress: new FormControl("", [Validators.required]),
  //         contactNumber: new FormControl("", [Validators.required, Validators.minLength(10), Validators.pattern(this.contactPattern)])
  //       }
  //     ),
  //     skills: new FormArray([])
  //   });
  //
  //
  // }

  onSubmit() {
    console.log(this.form.value);
  }

  get Skills() {
    return this.form.get('skills') as FormArray;
  }

  get fullname() {
    return this.form.get('fullname');
  }

  get email() {
    return this.form.get('email');
  }

  get address() {
    return this.form.get('contactDetails.address');
  }

  get shippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }

  get contactNumbber() {
    return this.form.get('contactDetails.contactNumber')
  }

  addSkills(skills: HTMLInputElement) {
    this.Skills.push(new FormControl(skills.value));
    console.log(this.form.value)

  }

  removeSkills(skill: any) {
    let index = this.Skills.controls.indexOf(skill);
    this.Skills.removeAt(index);
  }
}
