import { VacancyService } from './../vacancy.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { VacancyLookupService } from './../vacancyLookup.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { VacanciesModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-create-edit-vacancy',
  templateUrl: './create-edit-vacancy.component.html',
  styleUrls: ['./create-edit-vacancy.component.scss']
})
export class CreateEditVacancyComponent implements OnInit {

  location$ = this._vacancyLookupService.location$;
  titles$ = this._vacancyLookupService.titles$;
  businessArea$ = this._vacancyLookupService.businessArea$;
  contractType$ = this._vacancyLookupService.contractTypes$;
  salaryType$ = this._vacancyLookupService.salaryTypes$;
  employmentType$ = this._vacancyLookupService.employmentTypes$;

  form: FormGroup = this._formBuilder.group({
    jobTitle: new FormControl(null),
    salary: new FormControl(null),
    salaryType: new FormControl(null),
    businessArea: new FormControl(null),
    employmentType: new FormControl(null),
    contractType: new FormControl(null),
    location: new FormControl(null)
  });

  jobtitle: string;

  constructor(private _activatedRoute: ActivatedRoute,
    public _router: Router,
    private _vacancyService: VacancyService,
    private _vacancyLookupService: VacancyLookupService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    forkJoin([this._vacancyLookupService.getLocation(), this._vacancyLookupService.getTitles(),
    this._vacancyLookupService.getBusinessArea(), this._vacancyLookupService.getSalaryTypes(),
    this._vacancyLookupService.getContractTypes(), this._vacancyLookupService.getEmploymentTypes()]).subscribe();

    if (this._router.url != '/vacancy/vacancies/create') {
      this._activatedRoute.params.pipe(
        map(params => {
          return params['id'] as number;
        }),
        switchMap(id => {
          return this._vacancyService.getVacancy(id).pipe(tap(model => {
            let vacancyModel: VacanciesModel = model;
            this.form.patchValue(vacancyModel)
          }))
        })).subscribe();
    }
  }

  onSubmit() {

  }

  save() {

  }

}
