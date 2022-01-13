import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/client/config.service';
import { StorageService } from './../storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountModel } from '../interface/api';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(protected http: HttpClient,
    protected storageService: StorageService,
    private _configService: ConfigService) { }

  create(username: string, password: string) {
    return this.http.post<AccountModel>(this._configService.createAccount(), { username, password }).pipe(map(resp => {
      console.log(resp)
    }))
  }

  authenticate(username: string, password: string) {
    // this.jwtStorageService.clearJWT();
  }

  forgotPassword() {

  }

  logout() {
    this.storageService.clearTimeoutStorage();
    // this.jwtStorageService.clearJWT();
  }

}
