import {Component} from '@angular/core';
import {FormControl, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateDriven';

  onSubmit(f: NgForm) {
    console.log(f.value)
  }

  getValue(f: NgModel) {
    console.log(f.value);
  }
}
