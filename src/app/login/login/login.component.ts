import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl('', { validators: Validators.required, updateOn: 'blur' });
  password = new FormControl('', { validators: Validators.required, updateOn: 'blur' });

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });
  constructor() {}

  ngOnInit() {}

  submitLogin() {}
}
