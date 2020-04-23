import { Component } from '@angular/core';
import { autorun } from 'mobx';
import mirageServer from '../mirage/mirage.server';
import { RouterX } from './_services/router.mobx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hello-angular';

  constructor(public routerX: RouterX) {
    autorun(() => this.manageMirageMockServer());
  }

  manageMirageMockServer() {
    const mirageParam: string = this.routerX.paramMap.get('mirage');

    if (mirageParam === 'on') {
      return mirageServer.start();
    }

    if (mirageParam === 'off') {
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
