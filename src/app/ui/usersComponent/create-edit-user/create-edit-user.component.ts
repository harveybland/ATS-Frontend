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

  form: FormGroup = this._formBuilder.group({
    _id: new FormControl(''),
    title: new FormControl(''),
    firstname: new FormControl(''),
    surname: new FormControl(''),
    address: new FormControl(''),
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
  userId: number;

  constructor(private _activatedRoute: ActivatedRoute,
    private _usersService: UsersService,
    public _router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
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
