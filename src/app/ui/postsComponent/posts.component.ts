import { PostsService } from './posts.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ = this._postsService.posts$;
  users$ = this._postsService.users$;
  location$ = this._postsService.location$;

  axis$: any;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    forkJoin([this._postsService.getLocation(), this._postsService.getPosts()]).subscribe();
    this.axis$ = this._postsService.getAxis();
  }

}
