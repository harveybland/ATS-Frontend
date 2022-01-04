import { CreateEditUserComponent } from './ui/usersComponent/create-edit-user/create-edit-user.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { GeniusFormsModule } from './core/modules/genius-forms.module';
import { ThirdPartyModule } from './core/modules/third-party.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './ui/postsComponent/posts.service';

import { VacanciesComponent } from './ui/vacancyComponent/vacancies/vacancies.component';
import { PostsComponent } from './ui/postsComponent/posts/posts.component';
import { HeaderComponent } from './ui/header/header.component';
import { HomeComponent } from './ui/home/home.component';
import { UsersComponent } from './ui/usersComponent/users/users.component';
import { UserComponent } from './ui/usersComponent/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './core/modules/material.module';


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
    component: CreateEditUserComponent
  },
]

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    BrowserAnimationsModule,
    GeniusFormsModule,
    ThirdPartyModule,
    MaterialModule
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    HeaderComponent,
    HomeComponent,
    UsersComponent,
    CreateEditUserComponent,
    VacanciesComponent,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
