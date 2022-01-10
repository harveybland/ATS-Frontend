import { countriesModel, UsersModel } from 'src/app/core/interface/api';
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

  private _users$ = new BehaviorSubject<UsersModel[]>([]);
  users$ = this._users$.asObservable();

  private _countries$ = new BehaviorSubject<countriesModel[]>([]);
  countries$ = this._countries$.asObservable();

  axis: string[] = [];

  constructor(private _configService: ConfigService,
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get<countriesModel[]>(this._configService.countries()).pipe(map(resp => {
      this._countries$.next(resp)
    }))
  }

  getAxis() {
    this.axis = ['Application Source', 'Application Status', 'Application Submitted Date', 'Archived', 'Brands', 'Business Area', 'Contract Type', 'Department', 'Line Manager', 'Location', 'Vacancy Owner', 'Referral', 'Sector', 'Vacancy', 'Vacancy and Id', 'Vacancy Id', 'Vacancy Status', 'Employment Type']
    return of(this.axis.sort())
  }
}
