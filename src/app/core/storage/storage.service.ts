import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface TimeoutStorage {
  key: string;
  model: any;
  timeout: Date;
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: TimeoutStorage[] = [];
  private _storage$ = new BehaviorSubject<TimeoutStorage[]>(this._storage);

  constructor() {

  }

  clearItemTimeoutStorage(key: string) {
    let filtered = this._storage.filter(item => item.key !== key);
    this._storage = filtered;
    this._storage$.next(this._storage);
  }

  clearTimeoutStorage() {
    this._storage = [];
    this._storage$.next(this._storage);
  }

  // getItem<T>(key: string): T {
  //   let item = localStorage.getItem(key);
  //   if (!!item) {
  //     let itemString = item;
  //     return <T>JSON.parse(itemString);
  //   }
  //   return null;
  // }

  // clearItem(key: string) {
  //   localStorage.removeItem(key);
  // }

  // setItem(key: string, item: any) {
  //   let data = JSON.stringify(item);
  //   localStorage.setItem(key, data);
  // }
}
