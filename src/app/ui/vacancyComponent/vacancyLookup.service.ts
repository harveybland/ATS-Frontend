import { titlesModel } from './../../core/interface/api';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/client/config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { countriesModel } from 'src/app/core/interface/api';

@Injectable({
  providedIn: 'root'
})
export class VacancyLookupService {

  private _countries$ = new BehaviorSubject<countriesModel[]>([]);
  countries$ = this._countries$.asObservable();

  private _titles$ = new BehaviorSubject<titlesModel[]>([]);
  titles$ = this._titles$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getCountries() {
    return this.http.get<countriesModel[]>(this._configService.countries()).pipe(map(resp => {
      this._countries$.next(resp)
    }))
  }

  getTitles() {
    return this.http.get<titlesModel[]>(this._configService.titles()).pipe(map(resp => {
      this._titles$.next(resp)
    }));
  }

}
