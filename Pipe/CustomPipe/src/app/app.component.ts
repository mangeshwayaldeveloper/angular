import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomPipe';
  userDeatils:any={
     name:"Rahul",
    city:"Pune"
  }

  dummy:string="this is the dummy text for the summary pipe whihc is the very long dummy text";
}
