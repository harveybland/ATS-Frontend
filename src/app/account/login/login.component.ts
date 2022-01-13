import { AuthenticationService } from './../../core/services/authentication.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = this._formBuilder.group({
    username: new FormControl(null),
    password: new FormControl('')
  });

  constructor(private _formBuilder: FormBuilder,
    private _authenticationService: AuthenticationService,
    public _router: Router) { }

  ngOnInit() {
    this._authenticationService.logout();

  }

  onSubmit() {
    let username = this.loginForm.controls.username.value;
    let password = this.loginForm.controls.password.value;
    console.log(username, password)
    // let username = this.loginForm.get('username').value;
    // let password = this.loginForm.get('password').value;

    this._authenticationService.authenticate(username, password)
    // this._router.navigateByUrl('/dashboard');
  }

}
