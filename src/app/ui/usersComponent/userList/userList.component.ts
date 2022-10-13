import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { UsersModel } from 'src/app/core/interface/api';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
})
export class UserListComponent implements OnInit {

  users$ = this._usersService.users$
  array: Observable<Array<any>>

  constructor(private _usersService: UsersService,
    public _router: Router) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe();
  }

  remove(model: UsersModel) {
    model._id;
    this._usersService.remove(model).subscribe();
  }

}
