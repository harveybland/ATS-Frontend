import { AlbumsService } from './../albums.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {

  album$ = this._albumsService.album$

  constructor(private _albumsService: AlbumsService) { }

  ngOnInit() {
    this._albumsService.getAlbums().subscribe();
  }

}
