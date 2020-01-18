import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first, map } from 'rxjs/operators';
import { AuthenticationService } from '../../../_services/authentication.service';

@Component({
  selector: 'ha-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loading = false;
  returnUrl: string;
  username = new FormControl('', { validators: Validators.required, updateOn: 'change' });
  password = new FormControl('', { validators: Validators.required, updateOn: 'change' });

  loginForm = new FormGroup({
    username: this.username,
    password: this.password,
  });
  constructor(
    public authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.queryParamMap
      .pipe(
        map(params => {
          this.returnUrl = params.get('returnUrl');
        }),
      )
      .subscribe();
  }

  submitLogin() {
    this.loading = true;
    this.authenticationService
      .login(this.username.value, this.password.value)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate([this.returnUrl]).finally();
      });
  }
}
