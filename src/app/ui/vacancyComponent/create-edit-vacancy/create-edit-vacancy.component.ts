import { VacancyLookupService } from './../vacancyLookup.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-edit-vacancy',
  templateUrl: './create-edit-vacancy.component.html',
  styleUrls: ['./create-edit-vacancy.component.scss']
})
export class CreateEditVacancyComponent implements OnInit {

  countries$ = this._vacancyLookupService.countries$;
  titles$ = this._vacancyLookupService.titles$

  titles = new FormControl(null);
  country = new FormControl(null);

  form: FormGroup = this._formBuilder.group({
    salary: new FormControl(''),
    salaryType: new FormControl(''),
    businessArea: new FormControl(''),
    employmentType: new FormControl(''),
    contractType: new FormControl(''),
    title: this.titles,
    country: this.country

  });

  constructor(private _activatedRoute: ActivatedRoute,
    public _router: Router,
    private _vacancyLookupService: VacancyLookupService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this._vacancyLookupService.getCountries().subscribe()
    this._vacancyLookupService.getTitles().subscribe()
  }

  onSubmit() {

  }

  save() {

  }

}
