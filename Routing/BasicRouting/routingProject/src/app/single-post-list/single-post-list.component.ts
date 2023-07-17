import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-post-list',
  templateUrl: './single-post-list.component.html',
  styleUrls: ['./single-post-list.component.css']
})
export class SinglePostListComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => {
      let id = value.get('id')
      let title=value.get('title')
      console.log(id)
      console.log(title)
    })
  }

}
