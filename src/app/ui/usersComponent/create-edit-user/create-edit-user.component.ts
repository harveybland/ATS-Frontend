import { VacancyLookupService } from './../../vacancyComponent/vacancyLookup.service';
import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UsersModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-create-edit-user',
  templateUrl: './create-edit-user.component.html',
  styleUrls: ['./create-edit-user.component.scss']
})
export class CreateEditUserComponent implements OnInit {

  titles$ = this._usersService.titles$

  form: FormGroup = this._formBuilder.group({
    _id: new FormControl(null),
    title: new FormControl(null),
    firstname: new FormControl(null),
    surname: new FormControl(null),
    address: new FormControl(null),
    mobile: new FormControl(null),
    age: new FormControl(null),
    city: new FormControl(null),
    county: new FormControl(null),
    country: new FormControl(null),
    email: new FormControl(null),
    postcode: new FormControl(null),
    DOB: new FormControl(null),
  });

  username?: string;
  userId: number;

  constructor(private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService,
    public _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._usersService.getTitles().subscribe()
    if (this._router.url != '/users/users/create') {
      this._activatedRoute.params.pipe(
        map(params => {
          return params['id'] as number;
        }),
        switchMap(id => {
          this.userId = id;
          return this._usersService.getUser(id).pipe(tap(model => {
            this.username = model.firstname;
            let userModel: UsersModel = model;
            this.form.patchValue(userModel)
          }))
        })).subscribe();
    }
  }

  onSubmit() {
    let model = this.userModel();
    this._usersService.createUser(model).subscribe(data => {
      this._router.navigateByUrl('/users/users');
    });
  }

  save() {
    let model = this.userModel();
    this._usersService.updateUser(this.userId, model).subscribe(data => {
      this._router.navigateByUrl('/users/users');
    })
  }

  userModel() {
    return {
      _id: this.userId,
      title: this.form.controls.title.value,
      firstname: this.form.controls.firstname.value,
      surname: this.form.controls.surname.value,
      address: this.form.controls.address.value,
      mobile: this.form.controls.mobile.value,
      age: this.form.controls.age.value,
      city: this.form.controls.city.value,
      county: this.form.controls.county.value,
      country: this.form.controls.country.value,
      email: this.form.controls.email.value,
      postcode: this.form.controls.postcode.value,
      DOB: this.form.controls.DOB.value
    }
  }

}
