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
  textValue: string = "Value is comming from ts file";
  textValue2:string="This is two way binding";

  onKeyUp() {
    console.log(this.username)
    this.message = "Hello " + this.username;
  }
  onKeyUpT(){
    console.log(this.textValue)
  }
  onKeyUpTs(){
    console.log(this.textValue2)
  }
}
