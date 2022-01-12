import { PostModel } from './../../core/interface/api';
import { ConfigService } from 'src/app/core/client/config.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { VacanciesModel, UsersModel } from 'src/app/core/interface/api';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private _vacancies$ = new BehaviorSubject<VacanciesModel[]>([]);
  vacancies$ = this._vacancies$.asObservable();

  private _users$ = new BehaviorSubject<UsersModel[]>([]);
  users$ = this._users$.asObservable();

  private _posts$ = new BehaviorSubject<PostModel[]>([]);
  posts$ = this._posts$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getVacancies() {
    return this.http.get<VacanciesModel[]>(this._configService.vacancies()).pipe(map(resp => {
      this._vacancies$.next(resp)
    }))
  }

  getUsers() {
    return this.http.get<UsersModel[]>(this._configService.users()).pipe(map(resp => {
      this._users$.next(resp)
    }))
  }

  getPosts() {
    return this.http.get<PostModel[]>(this._configService.posts()).pipe(map(resp => {
      this._posts$.next(resp)
    }))
  }

}
