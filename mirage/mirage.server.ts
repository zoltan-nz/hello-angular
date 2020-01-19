import { Server } from 'miragejs';
import scenarioManager from './scenario.manager';

class MirageServer {
  public server: Server;
  private scenarioManager = scenarioManager;

  constructor() {}

  start() {
    this.server = this.server ? this.server : new Server();
    this.applySettings();
    scenarioManager.applyScenarios(this.server);
    console.log('Mirage Server is started.');
  }

  applySettings() {
    this.server.namespace = '/api';
  }

  stop() {
    if (this.server) {
      this.server.shutdown();
      this.server = undefined;
      console.log('Mirage Server is stopped.');
    } else {
      console.log('Mirage Server has been already stopped.');
    }
  }
}

const mirageServer = new MirageServer();

export default mirageServer;
