import { Component } from '@angular/core';
import { PostService } from '../Services/post.service';
import {Post} from "../models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  postVar: Array<any> = [];

  constructor(private postServ: PostService) {
    this.postVar = postServ.postList
  }

  addNew() {
    let newPost:Post = {
      id: 7,
      PostTitle: "Post 7"
    };
    this.postServ.addPost(newPost);
    this.postVar = this.postServ.postList
  }
}
