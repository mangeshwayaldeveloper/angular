import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pipe Project';
  name = "Hello World";
  number: number = 10000;
  decimal: number = 34.123456789;

  price: number = 20000;

  today: Date = new Date();

  obj: Array<object> = [{
    id: 1,
    name: "Mangesh",
    city: "Pune"

  }];
  arr:Array<string>=[
    "Mangesh",
    "Pavan",
    "Sachin",
    "Sagar",
  ]
}
