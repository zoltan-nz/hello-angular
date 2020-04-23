import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationEnd, ParamMap, Router } from '@angular/router';
import { action, observable } from 'mobx-angular';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RouterX {
  @observable url = '';
  @observable queryParamKeys: string[] = [];
  @observable paramMap: ParamMap;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(this.routeListener);
    activatedRoute.queryParamMap.subscribe(this.paramMapListener);
  }

  @action
  private routeListener = (event: NavigationEnd) => {
    this.url = event.urlAfterRedirects;
    console.log('URL:', this.url);
  };

  @action
  private paramMapListener = (paramMap: ParamMap) => {
    this.queryParamKeys = paramMap.keys;
    this.paramMap = paramMap;
  };

  @action
  navigate(url: string) {
    return this.router.navigate([url]);
  }
}
