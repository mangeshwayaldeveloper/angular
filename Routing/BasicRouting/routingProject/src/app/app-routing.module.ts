import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PostListComponent} from "./post-list/post-list.component";
import {SinglePostListComponent} from "./single-post-list/single-post-list.component";
import {WildCardComponent} from "./wild-card/wild-card.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id/:title', component: SinglePostListComponent},
  {path: '**', component: WildCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
