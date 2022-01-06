import { StorageService } from './../../core/storage/storage.service';
import { ConfigService } from '../../core/client/config.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';
import { PostModel } from '../../core/interface/api';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private _posts$ = new BehaviorSubject<PostModel[]>([]);
  posts$ = this._posts$.asObservable();

  axis: string[] = [];

  constructor(private _configService: ConfigService,
    private http: HttpClient,
    private storageService: StorageService) { }

  getPosts() {
    return this.http.get<PostModel[]>(this._configService.posts()).pipe(map(resp => {
      this._posts$.next(resp)
    }))
  }

  // Storage example
  create(model: PostModel) {
    return this.http.post<PostModel[]>(this._configService.posts(), model).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.posts());
      return this._posts$.next(resp)
    }))
  }

  getAxis() {
    this.axis = ['Application Source', 'Application Status', 'Application Submitted Date', 'Archived', 'Brands', 'Business Area', 'Contract Type', 'Department', 'Line Manager', 'Location', 'Vacancy Owner', 'Referral', 'Sector', 'Vacancy', 'Vacancy and Id', 'Vacancy Id', 'Vacancy Status', 'Employment Type']
    return of(this.axis.sort())
  }
}
