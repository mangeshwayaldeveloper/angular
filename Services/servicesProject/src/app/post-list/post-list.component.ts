import { Component } from '@angular/core';
import {PostService} from "../Services/post.service";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  postVar:Array<any>=[];
  constructor(private postServ:PostService) {
    this.postVar=postServ.postList
  }

}
