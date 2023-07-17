import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts=[
    {
      id:1,
      title:"Title 1",
      content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      id:2,
      title: "Title 2",
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id:3,
      title: "Title 3",
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id:4,
      title: "Title 4",
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id:5,
      title: "Title 5",
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    },
    {
      id:6,
      title: "Title 6",
      content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'
    }
  ]
  constructor(private route:ActivatedRoute) {
  }
  ngOnInit(){
    this.route.queryParams.subscribe(value => {
      console.log(value)
      console.log('page')
      console.log('orderBy')
    })
  }

}
