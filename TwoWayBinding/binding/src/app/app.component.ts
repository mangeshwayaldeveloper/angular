import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  username: string = "";
  message: string = "";

  onKeyUp() {
    console.log(this.username)
    this.message = "Hello " + this.username;
  }
}
