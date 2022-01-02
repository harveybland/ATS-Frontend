import { VacanciesComponent } from './ui/vacancyComponent/vacancies/vacancies.component';
import { GeniusFormsModule } from './core/modules/genius-forms.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './ui/postsComponent/posts.service';
import { PostsComponent } from './ui/postsComponent/posts/posts.component';
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
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'vacancies',
    component: VacanciesComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
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
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    VacanciesComponent
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
