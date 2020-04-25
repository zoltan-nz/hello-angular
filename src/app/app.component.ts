import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { autorun } from 'mobx';
import { action, observable } from 'mobx-angular';
import mirageServer from '../mirage/mirage.server';
import { RouterX } from './_services/router.mobx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-angular';

  @observable mirageParam: string;

  constructor(public routerX: RouterX, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParamMap.subscribe(this.updateMirageParam);
    autorun(() => this.manageMirageMockServer());
  }

  @action
  updateMirageParam = (queryParamMap: ParamMap) => {
    this.mirageParam = queryParamMap.get('mirage');
  };

  manageMirageMockServer() {
    if (this.mirageParam === 'on') {
      return mirageServer.start();
    }

    if (this.mirageParam === 'off') {
      return mirageServer.stop();
    }
  }

  mirageOn() {
    mirageServer.start();
  }

  mirageOff() {
    mirageServer.stop();
  }
}
