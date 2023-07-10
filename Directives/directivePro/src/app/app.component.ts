import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivePro';
  postArray: string[] = ['post1', 'post2', 'post3', 'post4', 'post5'];
  value: string = "";

  objArray: Array<any> = [{
    id: 1,
    name: "mangesh",
    address: "pune",
    age: 22
  }, {
    id: 2,
    name: "sachin",
    address: "jalna",
    age: 22
  },
    {
      id: 3,
      name: "pavan",
      address: "sambhajinagar",
      age: 23
    }]

  constructor() {
    // for (let i=0 ;i<this.postArray.length;i++){
    //   this.value=this.postArray[i]
    //   console.log(this.value)
    // }
  }
}
