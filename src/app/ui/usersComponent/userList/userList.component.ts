import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
})
export class UserListComponent implements OnInit {

  users$ = this._usersService.users$

  constructor(private _usersService: UsersService) { }

  ngOnInit() {
    this._usersService.getUsers().subscribe();
  }

}
