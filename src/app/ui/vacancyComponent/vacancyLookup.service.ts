import { IOptionLookup, locationModel } from './../../core/interface/api';
import { map } from 'rxjs/operators';
import { ConfigService } from 'src/app/core/client/config.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VacancyLookupService {

  private _location$ = new BehaviorSubject<locationModel[]>([]);
  location$ = this._location$.asObservable();

  private _titles$ = new BehaviorSubject<IOptionLookup[]>([]);
  titles$ = this._titles$.asObservable();

  private _businessArea$ = new BehaviorSubject<IOptionLookup[]>([]);
  businessArea$ = this._businessArea$.asObservable();

  private _salaryTypes$ = new BehaviorSubject<IOptionLookup[]>([]);
  salaryTypes$ = this._salaryTypes$.asObservable();

  private _contractTypes$ = new BehaviorSubject<IOptionLookup[]>([]);
  contractTypes$ = this._contractTypes$.asObservable();

  private _employmentTypes$ = new BehaviorSubject<IOptionLookup[]>([]);
  employmentTypes$ = this._employmentTypes$.asObservable();

  constructor(private _configService: ConfigService,
    private http: HttpClient) { }

  getLocation() {
    return this.http.get<locationModel[]>(this._configService.location()).pipe(map(resp => {
      this._location$.next(resp)
    }))
  }

  getTitles() {
    return this.http.get<IOptionLookup[]>(this._configService.titles()).pipe(map(resp => {
      this._titles$.next(resp)
    }));
  }

  getBusinessArea() {
    return this.http.get<IOptionLookup[]>(this._configService.businessArea()).pipe(map(resp => {
      this._businessArea$.next(resp)
    }));
  }

  getSalaryTypes() {
    return this.http.get<IOptionLookup[]>(this._configService.salaryType()).pipe(map(resp => {
      this._salaryTypes$.next(resp)
    }));
  }

  getContractTypes() {
    return this.http.get<IOptionLookup[]>(this._configService.contractType()).pipe(map(resp => {
      this._contractTypes$.next(resp)
    }));
  }

  getEmploymentTypes() {
    return this.http.get<IOptionLookup[]>(this._configService.employmentType()).pipe(map(resp => {
      this._employmentTypes$.next(resp)
    }));
  }

}
