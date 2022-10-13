import { VacancyService } from '../../vacancy.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-QuickView',
  templateUrl: './QuickView.component.html',
  styleUrls: ['./QuickView.component.scss']
})
export class QuickViewComponent implements OnInit {

  public vacancy: any

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private _vacancyService: VacancyService) { }

  ngOnInit() {
    this._vacancyService.getVacancy(this.data).subscribe(data => {
      this.vacancy = data
    });
  }

}
