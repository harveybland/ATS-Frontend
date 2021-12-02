import { GeniusFormsModule } from './core/modules/genius-forms.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './ui/postsComponent/posts.service';
import { PostsComponent } from './ui/postsComponent/posts/posts.component';
import { PostComponent } from './ui/postsComponent/post/post.component';
import { AlbumsComponent } from './ui/albumComponent/albums/albums.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { UsersComponent } from './ui/usersComponent/users/users.component';
import { UserComponent } from './ui/usersComponent/user/user.component';
import { MaterialModule } from './core/modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'albums',
    component: AlbumsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'post/:id',
    component: PostComponent
  },
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    MaterialModule,
    GeniusFormsModule
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    AlbumsComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    UserComponent
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
