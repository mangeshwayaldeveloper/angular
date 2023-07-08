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
  showTitle: string = "";
  postDetailsText: string = "";
  showDetails: string = "";
  imageUrl: string = "";
  showImage: string = "";
  urlText: string = "";
  showUrl: string = "";
  bgColor: string = "yellow";
  showBgColor:string="";
  OnKey() {
    this.showTitle = this.postTitleText;
  }

  OnKey2() {
    this.showDetails = this.postDetailsText;
  }

  OnKey3() {
    this.showImage = this.imageUrl;
  }

  OnKey4() {
    this.showUrl = this.urlText;
  }

  OnClick() {
    this.showBgColor = this.bgColor;
  }
}
