import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-main-navigation-bar',
  templateUrl: './main-navigation-bar.component.html',
  styleUrls: ['./main-navigation-bar.component.scss'],
})
export class MainNavigationBarComponent {
  isCollapsed = true;

  constructor(public authenticationService: AuthenticationService) {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
