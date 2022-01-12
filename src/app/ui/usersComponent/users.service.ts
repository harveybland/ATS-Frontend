import { StorageService } from './../../core/storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { IOptionLookup, UsersModel } from './../../core/interface/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from 'src/app/core/client/config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$ = new BehaviorSubject<UsersModel[]>([]);
  users$ = this._users$.asObservable();

  private _titles$ = new BehaviorSubject<IOptionLookup[]>([]);
  titles$ = this._titles$.asObservable();

  constructor(private _configService: ConfigService,
    private storageService: StorageService,
    private http: HttpClient) { }

  getUsers() {
    return this.http.get<UsersModel[]>(this._configService.users()).pipe(map(resp => {
      this._users$.next(resp)
    }))
  }

  getUser(id: number) {
    return this.http.get<UsersModel>(this._configService.user(id))
  }

  createUser(model: UsersModel) {
    return this.http.post<UsersModel[]>(this._configService.users(), model).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.users());
      this._users$.next(resp)
    }))
  }

  remove(model: UsersModel) {
    return this.http.delete<UsersModel[]>(this._configService.user(model._id)).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.users());
      this.storageService.clearItemTimeoutStorage(this._configService.user(model._id));
      this._users$.next(resp)
    }))
  }

  updateUser(id: number, model: UsersModel) {
    return this.http.put<UsersModel[]>(this._configService.user(id), model).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.users());
      this._users$.next(resp)
    }))
  }

  // Loojup
  getTitles() {
    return this.http.get<IOptionLookup[]>(this._configService.titles()).pipe(map(resp => {
      this._titles$.next(resp)
    }));
  }

}
