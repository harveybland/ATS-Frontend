import { Component, OnInit } from '@angular/core';
import { VacancyService } from './../vacancy.service'

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies$ = this._vacancyService.vacancies$

  constructor(private _vacancyService: VacancyService) { }

  ngOnInit() {
    this._vacancyService.getVacancies().subscribe()
  }

}
