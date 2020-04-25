import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, ParamMap, Router } from '@angular/router';
import { action, observable } from 'mobx-angular';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterX {
  @observable url = '';

  constructor(private router: Router) {
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(this.routeListener);
  }

  @action
  private routeListener = (event: NavigationEnd) => {
    this.url = event.urlAfterRedirects;
    console.log('URL:', this.url);
  };

  @action
  navigate(url: string) {
    return this.router.navigate([url]);
  }
}
