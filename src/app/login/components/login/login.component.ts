import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username = new FormControl('', { validators: Validators.required, updateOn: 'change' });
  password = new FormControl('', { validators: Validators.required, updateOn: 'change' });

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });
  constructor() {}

  ngOnInit() {}

  submitLogin() {}
}
