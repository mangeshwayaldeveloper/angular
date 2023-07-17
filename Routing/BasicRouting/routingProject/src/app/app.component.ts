import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {observable, Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routingProject';

  constructor(private router: Router) {
  }

  ngOnInit() {
    const obTest$ = new Observable(observer => {
      observer.next("First Returned From Observable")
      observer.next("Second Returned From Observable")
      setTimeout(() => {
        observer.next
        ("Third But this is the Timeout")
      }, 2000)
      observer.next("Third Returned From Observable")
    }).subscribe(value => {
      console.log(value)
    })
    obTest$.unsubscribe();
  }

  BackToPost() {
    this.router.navigate(['/posts'])
  }
  SinglePost(){
    this.router.navigate(['/posts',1,'postTitle'])
  }

  ToqueryParameter(){
    this.router.navigate(['/posts'],{queryParams:{page:1,order:'newest'}})
  }
}

