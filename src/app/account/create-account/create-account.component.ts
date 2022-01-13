import { AuthenticationService } from './../../core/services/authentication.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {

  accountForm: FormGroup = this._formBuilder.group({
    username: new FormControl(null),
    password: new FormControl(null)
  });

  constructor(private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    public _router: Router) { }

  ngOnInit() {

  }

  onSubmit() {
    let username = this.accountForm.controls.username.value;
    let password = this.accountForm.controls.password.value;

    this._authenticationService.create(username, password).subscribe(data => {
      console.log(data)
    })
    this._router.navigateByUrl('/account/login');
  }


}
