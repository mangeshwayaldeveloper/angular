import { Component } from '@angular/core';
import {PostService} from './Services/post.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'servicesProject';
  postVar:Array<any>=[];
  constructor(private postServ:PostService) {
    // let postServ=new PostService()
    this.postVar=postServ.postList
  }
}
