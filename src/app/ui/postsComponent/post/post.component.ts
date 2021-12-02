import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  public title?: string;
  public body?: string;
  public id?: number;
  public userId?: number;

  constructor(private _activatedRoute: ActivatedRoute,
    private _postsService: PostsService) { }

  ngOnInit() {
    this._activatedRoute.params.pipe(
      map(params => {
        return params['id'] as number;
      }),
      switchMap(id => {
        return this._postsService.getPost(id).pipe(tap(model => {
          console.log(model)
          this.title = model.title;
          this.body = model.body;
          this.id = model.id;
          this.userId = model.userId;
        }))
      })).subscribe();
  }
}
