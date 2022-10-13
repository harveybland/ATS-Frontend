import { QuickViewComponent } from './QuickView/QuickView.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VacancyService } from '../vacancy.service'
import { VacanciesModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies$ = this._vacancyService.vacancies$;

  constructor(private _vacancyService: VacancyService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this._vacancyService.getVacancies().subscribe()
  }

  modalOpened(_id?: number) {
    const dialogRef = this.dialog.open(QuickViewComponent, {
      maxWidth: '768px',
      data: _id,
    });
  }

  remove(model: VacanciesModel) {
    model._id;
    this._vacancyService.remove(model).subscribe();
  }
}
