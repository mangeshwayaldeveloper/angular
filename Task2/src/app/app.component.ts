import {Component} from '@angular/core';
import {count} from "rxjs";
import {style} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task2';
  username: string = " ";
  email: string = " ";
  address: string = "";
  details: Array<any> = [];
  count: number = 1;

  saveData() {
    this.details.push({"username": this.username, "email": this.email, "address": this.address})
    console.log(this.details)
  }

  delete(obj: any) {
    let index = this.details.indexOf(obj)
    this.details.splice(index, 1);
    this.count--;
  }
}
