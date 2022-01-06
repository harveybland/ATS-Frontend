import { HttpClient } from '@angular/common/http';
import { UsersModel, VacanciesModel } from './../../core/interface/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from 'src/app/core/client/config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private _vacancies$ = new BehaviorSubject<VacanciesModel[]>([]);
  vacancies$ = this._vacancies$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getVacancies() {
    return this.http.get<VacanciesModel[]>(this._configService.vacancies()).pipe(map(resp => {
      this._vacancies$.next(resp)
    }))
  }

  // getUser(id: number) {
  //   return this.http.get<UsersModel>(this._configService.user(id))
  // }


}
