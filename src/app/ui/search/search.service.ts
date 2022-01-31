import { ConfigService } from 'src/app/core/client/config.service';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './../../core/storage/storage.service';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VacanciesModel } from 'src/app/core/interface/api';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private _vacancies$ = new BehaviorSubject<VacanciesModel[]>([]);
  vacancies$ = this._vacancies$.asObservable();

  constructor(protected http: HttpClient,
    protected storageService: StorageService,
    private _configService: ConfigService) { }

  searchVacancy(location?: string,
    contractType?: string,
    employmentType?: string,
    businessArea?: string,
    salary?: string,
    salaryType?: string,
    jobTitle?: string) {
    let params = new HttpParams();
    if (!!location) {
      params = params.append('location', location.toString());
    }
    if (!!contractType) {
      params = params.append('contractType', contractType.toString());
    }
    if (!!employmentType) {
      params = params.append('employmentType', employmentType.toString());
    }
    if (!!businessArea) {
      params = params.append('businessArea', businessArea.toString());
    }
    if (!!salary) {
      params = params.append('salary', salary.toString());
    }
    if (!!salaryType) {
      params = params.append('salaryType', salaryType.toString());
    }
    if (!!jobTitle) {
      params = params.append('jobTitle', jobTitle.toString());
    }
    this.storageService.clearTimeoutStorage();
    return this.http.get<VacanciesModel[]>(this._configService.searchVacancy, { params: params }).pipe(map(resp => {
      this._vacancies$.next(resp)
    }));
  }

}
