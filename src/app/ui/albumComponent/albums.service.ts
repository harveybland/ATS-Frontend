import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/client/config.service';
import { AlbumModel } from 'src/app/core/interface/api';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  private _album$ = new BehaviorSubject<AlbumModel[]>([]);
  album$ = this._album$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getAlbums() {
    return this.http.get<AlbumModel[]>(this._configService.albums()).pipe(map(resp => {
      this._album$.next(resp)
    }))
  }


}
