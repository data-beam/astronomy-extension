import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the astronomy-extension extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'astronomy-extension:plugin',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension astronomy-extension is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('astronomy-extension settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for astronomy-extension.', reason);
        });
    }
  }
};

export default plugin;
