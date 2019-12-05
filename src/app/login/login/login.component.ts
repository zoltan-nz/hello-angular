import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
    password: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
  });
  username: AbstractControl;
  password: AbstractControl;

  constructor() {}

  ngOnInit() {
    this.username = this.loginForm.get('username');
    this.password = this.loginForm.get('password');
  }

  submitLogin() {}
}
