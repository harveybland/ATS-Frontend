import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserModel } from 'src/app/core/interface/api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  form: FormGroup = this._formBuilder.group({
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    website: new FormControl(''),
    company: new FormControl(''),
    suite: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
  });

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
          // Option 1
          this.form.controls['website'].patchValue(model.website);
          // Option 2
          this.form.patchValue({
            name: model.name
          });
          let userModel: UserModel = model
        }))
      })).subscribe();
  }

  // generateModel() {
  //   return {
  //     name: this.form.controls.name.value,
  //     email: this.form.controls.email.value,
  //     phone: this.form.controls.phone.value,
  //     website: this.form.controls.website.value,
  //     company: this.form.controls.company.value,
  //     suite: this.form.controls.suite.value,
  //     street: this.form.controls.street.value,
  //     city: this.form.controls.city.value,
  //     zipcode: this.form.controls.zipcode.value,
  //   };
  // }

  onSubmit() {

  }

}
