import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import MirageServer from '../mirage/server';

if (environment.production) {
  enableProdMode();
}

if (!environment.production) {
  const mirageServer = new MirageServer();
  mirageServer.start();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
