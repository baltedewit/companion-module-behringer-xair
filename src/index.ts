import InstanceSkel = require('../../../instance_skel')
import { CompanionActionEvent, CompanionConfigField } from '../../../instance_skel_types'

import { GetActionsList, HandleAction } from './actions'
import { DeviceConfig, GetConfigFields } from './config'

class ControllerInstance extends InstanceSkel<DeviceConfig> {
  /**
   * Main initialization function called once the module
   * is OK to start doing things.
   */
  public init() {
    this.status(this.STATUS_OK)

    this.setActions(GetActionsList())
  }

  /**
   * Process an updated configuration array.
   */
  public updateConfig(config: DeviceConfig) {
    this.config = config
  }

  /**
   * Executes the provided action.
   */
  public action(action: CompanionActionEvent) {
    const command = HandleAction(this, action)

    if (command) {
      this.system.emit('osc_send', this.config.host, 10024, command.cmd, [command.arg])
    }
  }

  /**
   * Creates the configuration fields for web config.
   */
  public config_fields(): CompanionConfigField[] {
    return GetConfigFields()
  }

  /**
   * Clean up the instance before it is destroyed.
   */
  public destroy() {
    this.debug('destry', this.id)
  }
}

export = ControllerInstance
