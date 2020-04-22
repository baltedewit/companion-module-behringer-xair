import { SomeCompanionConfigField } from '../../../instance_skel_types'

export interface DeviceConfig {
  host: string
}

export function GetConfigFields(): SomeCompanionConfigField[] {
  return [
    {
      type: 'textinput',
      id: 'host',
      label: 'Target IP',
      tooltip: 'The IP of the Mr / Xr console',
      width: 6
      // regex: this.REGEX_IP
    }
  ]
}
