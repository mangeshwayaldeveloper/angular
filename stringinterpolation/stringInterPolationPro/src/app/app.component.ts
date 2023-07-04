import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stringInterPolationPro';
  variable: string = "Hello World";
  imgUrl: string = "https://avatars.githubusercontent.com/u/120046874?s=400&u=acdfe79ffca338cf854d6f51ac3f1a008f9e8f36&v=4"
  bool: boolean = false;
  count: number = 0;
  sum: number = 0;

  onClick() {
    alert("Hey You have clicked on the button")
  }

  onKeyUp($event: any) {
    this.count++;
    console.log($event.keyCode);
    this.sum = this.sum + $event.keyCode;
    if ($event.keyCode == 13) {
      console.log("Enter is pressed");
    }
  }

  keyPress() {
    console.log("Enter Key Is Hitted")
  }

  onKey(username:any) {
    console.log(username);
  }
}
