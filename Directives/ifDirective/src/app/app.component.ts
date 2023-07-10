import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ifDirective';
  objArray: Array<object> = [];

  addArray() {
    this.objArray.push({name: 'test', age: 20})
  }

  deleteObj(index: number) {
    this.objArray = this.objArray.splice(index, 1);
  }
}
