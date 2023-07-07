import {Component} from '@angular/core';
import {style} from "@angular/animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskProject';
  postTitleText: string = "";
  postDetailsText: string = "";
  imageUrl: string = "";
  urlText: string = "";
  bgColors:boolean=false; 
}
