import { StorageService } from './../../core/storage/storage.service';
import { HttpClient } from '@angular/common/http';
import { UsersModel, VacanciesModel } from './../../core/interface/api';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConfigService } from 'src/app/core/client/config.service';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {

  private _vacancies$ = new BehaviorSubject<VacanciesModel[]>([]);
  vacancies$ = this._vacancies$.asObservable();

  constructor(private _configService: ConfigService,
    private storageService: StorageService,
    private http: HttpClient) { }

  getVacancies() {
    return this.http.get<VacanciesModel[]>(this._configService.vacancies()).pipe(map(resp => {
      this._vacancies$.next(resp)
    }))
  }

  getVacancy(id: number) {
    return this.http.get<VacanciesModel>(this._configService.vacancy(id))
  }

  createVacancy(model: VacanciesModel) {
    return this.http.post<VacanciesModel[]>(this._configService.vacancies(), model).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.vacancies());
      this._vacancies$.next(resp)
    }))
  }

  updateVacancy(id: number, model: VacanciesModel) {
    return this.http.put<VacanciesModel[]>(this._configService.vacancy(id), model).pipe(map(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.vacancies());
      this._vacancies$.next(resp)
    }))
  }

  remove(model: VacanciesModel) {
    return this.http.delete<VacanciesModel[]>(this._configService.vacancy(model._id!)).pipe(tap(resp => {
      this.storageService.clearItemTimeoutStorage(this._configService.vacancies());
      this.storageService.clearItemTimeoutStorage(this._configService.vacancy(model._id!));
      this._vacancies$.next(resp)
    }))
  }


}
