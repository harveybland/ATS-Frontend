import { DashboardService } from './dashboard.service';
import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  vacancies$ = this._dashboardService.vacancies$
  users$ = this._dashboardService.users$
  posts$ = this._dashboardService.posts$;

  constructor(private _dashboardService: DashboardService) { }

  ngOnInit() {
    forkJoin([this._dashboardService.getVacancies(), this._dashboardService.getUsers(),
    this._dashboardService.getPosts()]).subscribe()
  }

}
