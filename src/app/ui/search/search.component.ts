import { StorageService } from './../../core/storage/storage.service';
import { SearchService } from './search.service';
import { VacancyLookupService } from './../vacancyComponent/vacancyLookup.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { VacanciesModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  location$ = this._vacancyLookupService.location$;
  businessArea$ = this._vacancyLookupService.businessArea$;
  contractType$ = this._vacancyLookupService.contractTypes$;
  salaryType$ = this._vacancyLookupService.salaryTypes$;
  employmentType$ = this._vacancyLookupService.employmentTypes$;

  vacancies$ = this._searchService.vacancies$;

  location: string;
  contractType: string;
  employmentType: string;
  businessArea: string;
  salary: string;
  salaryType: string;
  jobTitle: string;

  constructor(private _vacancyLookupService: VacancyLookupService,
    private _searchService: SearchService,
    protected storageService: StorageService) { }

  ngOnInit() {
    forkJoin([this._vacancyLookupService.getLocation(), this._vacancyLookupService.getBusinessArea(),
    this._vacancyLookupService.getSalaryTypes(), this._vacancyLookupService.getContractTypes(),
    this._vacancyLookupService.getEmploymentTypes()]).subscribe();
  }

  search() {
    this._searchService.searchVacancy(this.location, this.contractType, this.employmentType,
      this.businessArea, this.salary, this.salaryType, this.jobTitle).subscribe();
  }


}
