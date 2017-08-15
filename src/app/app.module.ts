import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OnlineListComponent } from './online-list/onlineList.component';
import { PostComponent } from './posts/post.component';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';
import { PageNotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  { path: '**', component: PageNotfoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OnlineListComponent,
    PostComponent,
    HeaderComponent,
    CommentsComponent,
    PageNotfoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
