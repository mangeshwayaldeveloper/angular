import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateVariable';
  objArray:Array<object>=[];

  addObj(){
    this.objArray.push({id:1,name:"mangesh"})
  }

  deleteObj(index: number) {
    this.objArray = this.objArray.splice(index, 1);
  }
}
