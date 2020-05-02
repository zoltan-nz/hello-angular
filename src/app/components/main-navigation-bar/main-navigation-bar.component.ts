import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthenticationService } from '../../_services/authentication.service';

@Component({
  selector: 'app-main-navigation-bar',
  templateUrl: './main-navigation-bar.component.html',
  styleUrls: ['./main-navigation-bar.component.scss'],
})
export class MainNavigationBarComponent {
  shoppingCart = faShoppingCart;
  constructor(public authenticationService: AuthenticationService) {}
}
