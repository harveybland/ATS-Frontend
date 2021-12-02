import { HttpClient } from '@angular/common/http';
import { UserModel } from './../../core/interface/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from 'src/app/core/client/config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private _users$ = new BehaviorSubject<UserModel[]>([]);
  users$ = this._users$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getUsers() {
    return this.http.get<UserModel[]>(this._configService.users()).pipe(map(resp => {
      this._users$.next(resp)
    }))
  }

  getUser(id: number) {
    return this.http.get<UserModel>(this._configService.user(id))
  }

}
