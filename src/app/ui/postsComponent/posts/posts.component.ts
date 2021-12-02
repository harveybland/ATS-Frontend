import { PostsService } from '../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$ = this._postsService.posts$;

  axis$: any;

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    this._postsService.getPosts().subscribe();
    this.axis$ = this._postsService.getAxis();
  }

}
