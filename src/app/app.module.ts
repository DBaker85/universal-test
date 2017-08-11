import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { OnlineListComponent } from './online-list/onlineList.component';
import { PostComponent } from './posts/post.component';
import { HeaderComponent } from './header/header.component';
import { CommentsComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    OnlineListComponent,
    PostComponent,
    HeaderComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
