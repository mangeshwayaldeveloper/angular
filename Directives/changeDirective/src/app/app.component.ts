import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDirective';
  objArray: Array<object> =
    [{id: 1, name: "mangesh", age: 22},
      {id: 2, name: "rushikesh", age: 23},
      {id: 3, name: "sagar", age: 24},]

  addNew() {
    this.objArray.push({id: 4, name: "mayur", age: 23})
  }

  deleteObj(index:number) {
    // this.objArray.pop();
    this.objArray.splice(index, 1)
  }
}
