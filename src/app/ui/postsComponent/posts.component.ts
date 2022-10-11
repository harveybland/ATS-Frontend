import { PostsService } from './posts.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { forkJoin } from 'rxjs';
import { debounceTime, exhaustMap } from 'rxjs/operators';

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

  isGreen: boolean = false;
  isDisabled: boolean = false;

  typeahead = new EventEmitter<string>();

  constructor(private _postsService: PostsService) { }

  ngOnInit() {
    document.body.style.overflow = "hidden";
    forkJoin([this._postsService.getLocation(), this._postsService.getPosts()]).subscribe();
    this.axis$ = this._postsService.getAxis();

    this.typeahead.pipe(
      debounceTime(400),
      exhaustMap(term => {
        return this._postsService.getLocation();
      })).subscribe();
  }

}
