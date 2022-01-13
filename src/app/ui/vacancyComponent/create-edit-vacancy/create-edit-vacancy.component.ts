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

  jobtitle?: string;
  vacancyId: number;

  constructor(private _activatedRoute: ActivatedRoute,
    public _router: Router,
    private _vacancyService: VacancyService,
    private _vacancyLookupService: VacancyLookupService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    forkJoin([this._vacancyLookupService.getLocation(), this._vacancyLookupService.getBusinessArea(),
    this._vacancyLookupService.getSalaryTypes(), this._vacancyLookupService.getContractTypes(),
    this._vacancyLookupService.getEmploymentTypes()]).subscribe();

    if (this._router.url != '/vacancy/vacancies/create') {
      this._activatedRoute.params.pipe(
        map(params => {
          return params['id'] as number;
        }),
        switchMap(id => {
          this.vacancyId = id;
          return this._vacancyService.getVacancy(id).pipe(tap(model => {
            this.jobtitle = model.jobTitle;
            let vacancyModel: VacanciesModel = model;
            this.form.patchValue(vacancyModel)
          }))
        })).subscribe();
    }
  }

  onSubmit() {
    let model = this.vacancyModel();
    this._vacancyService.createVacancy(model).subscribe(data => {
      this._router.navigateByUrl('/vacancy/vacancies');
    });
  }

  save() {
    let model = this.vacancyModel();
    this._vacancyService.updateVacancy(this.vacancyId, model).subscribe(data => {
      this._router.navigateByUrl('/vacancy/vacancies');
    })
  }

  vacancyModel() {
    return {
      jobTitle: this.form.controls.jobTitle.value,
      salary: this.form.controls.salary.value,
      salaryType: this.form.controls.salaryType.value,
      businessArea: this.form.controls.businessArea.value,
      employmentType: this.form.controls.employmentType.value,
      contractType: this.form.controls.contractType.value,
      location: this.form.controls.location.value,
    }
  }

}
