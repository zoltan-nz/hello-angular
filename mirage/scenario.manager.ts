import { Server } from 'miragejs';
import { HAPPY_PATH, scenarioMap } from './scenario.map';
import { Scenario } from './scenarios';

class ScenarioManager {
  private urlSearchParams = new URLSearchParams(window.location.search);
  activeScenarios: Scenario[] = HAPPY_PATH;

  constructor() {
    this.getCustomScenariosFromQueryParam();
  }

  getCustomScenariosFromQueryParam() {
    const customScenarios = this.urlSearchParams.get('s');
    const customScenarioFunctions = customScenarios
      ?.split(',')
      .map((customScenarioName) => scenarioMap[customScenarioName.toUpperCase()])
      .filter((customScenario) => customScenario);
    if (customScenarioFunctions) this.activeScenarios = this.activeScenarios.concat(customScenarioFunctions);
  }

  applyScenarios(server: Server) {
    this.activeScenarios.forEach((scenario) => scenario.call(this, server));
  }
}

const scenarioManager = new ScenarioManager();

export default scenarioManager;
