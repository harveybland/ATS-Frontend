import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    _id: new FormControl(''),
    firstname: new FormControl(''),
    surname: new FormControl(''),
    mobile: new FormControl(''),
    age: new FormControl(''),
    city: new FormControl(''),
    county: new FormControl(''),
    country: new FormControl(''),
    email: new FormControl(''),
    postcode: new FormControl(''),
    DOB: new FormControl(''),
  });

  username?: string;

  constructor(private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._activatedRoute.params.pipe(
      map(params => {
        return params['id'] as number;
      }),
      switchMap(id => {
        return this._usersService.getUser(id).pipe(tap(model => {
          console.log(model)
          this.username = model.firstname;
          let userModel: UsersModel = model;
          this.form.patchValue(userModel)
        }))
      })).subscribe();
  }

  onSubmit() {
    console.log('ello world')
  }

}
