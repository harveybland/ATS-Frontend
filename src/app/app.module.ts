import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { GeniusFormsModule } from './core/modules/genius-forms.module';
import { ThirdPartyModule } from './core/modules/third-party.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsService } from './ui/postsComponent/posts.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    GeniusFormsModule,
    ThirdPartyModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
