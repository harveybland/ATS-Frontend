import { StorageService } from './storage.service';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { JWT } from '../interface/api';

@Injectable({
  providedIn: 'root'
})
export class JwtStorageService {

  // private _jwt: JWT;
  // private _jwt$ = new BehaviorSubject<JWT>(this._jwt);
  // jwt$ = this._jwt$.asObservable();

  // private _jwtStorageKey = `JWTSTORAGE`;
  constructor(protected storageService: StorageService) {

  }

  //   getJWT() {
  //     return this.storageService.getItem<JWT>(this._jwtStorageKey);
  //   }

  //   setJWT(jwt: JWT) {
  //     this._jwt$.next(jwt);
  //     this.storageService.setItem(this._jwtStorageKey, jwt);
  //   }

  //   getDetails() {
  //     let jwt = this.getJWT();
  //     if (!!jwt) {
  //         return {
  //             clientId: jwt.clientId,
  //             userId: jwt.userId,
  //             userName: jwt.userName,
  //             forename: jwt.forename,
  //             surname: jwt.surname,
  //             expires_in: jwt.expires_in
  //         };
  //     }
  //     return {};
  // }


  //   clearJWT() {
  //     // this._jwt$.next(null);
  //     this.storageService.clearItem(this._jwtStorageKey);
  //   }

}
