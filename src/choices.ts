import { CompanionInputFieldTextInput, CompanionInputFieldDropdown } from '../../../instance_skel_types'

export function TypePicker(): CompanionInputFieldDropdown {
  const choices = [
    { id: '/ch/', label: 'Channel 01-16' },
    { id: '/rtn/', label: 'Fx Return 1-4' },
    { id: '/fxsend/', label: 'Fx Send 1-4' },
    { id: '/bus/', label: 'Bus 1-6' }
  ]
  return {
    type: 'dropdown',
    label: 'Type',
    id: 'type',
    choices,
    default: '/ch/'
  }
}

export function IndexPicker(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Channel, Fx Return, Fx Send or Bus Number',
    id: 'num',
    default: '1'
    // regex:    self.REGEX_NUMBER
  }
}
export function ChannelPicker(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Channel Number',
    id: 'num',
    default: '1'
    // regex:    self.REGEX_NUMBER
  }
}
export function BusPicker(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Bus Number',
    id: 'num',
    default: '1'
    // regex:    self.REGEX_NUMBER
  }
}
export function MuteGroupPicker(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Mute Group Number (1-4)',
    id: 'mute_grp',
    default: '1'
    // regex:    self.REGEX_NUMBER
  }
}
export function SnapshotPicker(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Snapshot Nr 1-64',
    id: 'snap',
    default: '1'
    // regex:    self.REGEX_NUMBER
  }
}

export function MuteStatePicker(): CompanionInputFieldDropdown {
  return {
    type: 'dropdown',
    label: 'Mute / Unmute',
    id: 'mute',
    choices: [
      { id: '0', label: 'Mute' },
      { id: '1', label: 'Unmute' }
    ],
    default: '0'
  }
}

export function FaderLevelPresets(): CompanionInputFieldDropdown {
  const faderLevels = [
    { label: '- ∞', id: '0.0' },
    { label: '-50 dB: ', id: '0.1251' },
    { label: '-30 dB', id: '0.251' },
    { label: '-20 dB', id: '0.375' },
    { label: '-18 dB', id: '0.4' },
    { label: '-15 dB', id: '0.437' },
    { label: '-12 dB', id: '0.475' },
    { label: '-9 dB', id: '0.525' },
    { label: '-6 dB', id: '0.6' },
    { label: '-3 dB', id: '0.675' },
    { label: '-2 dB', id: '0.7' },
    { label: '-1 dB', id: '0.725' },
    { label: '0 dB', id: '0.75' },
    { label: '+1 dB', id: '0.775' },
    { label: '+2 dB', id: '0.8' },
    { label: '+3 dB', id: '0.825' },
    { label: '+4 dB', id: '0.85' },
    { label: '+5 dB', id: '0.875' },
    { label: '+6 dB', id: '0.9' },
    { label: '+9 dB', id: '0.975' },
    { label: '+10 dB', id: '1.0' }
  ]

  return {
    type: 'dropdown',
    label: 'Fader Level',
    id: 'fad',
    choices: faderLevels,
    default: '0.75'
  }
}

export function LabelName(): CompanionInputFieldTextInput {
  return {
    type: 'textinput',
    label: 'Label',
    id: 'lab',
    default: ''
  }
}

export function ColorPicker(): CompanionInputFieldDropdown {
  const colors = [
    { label: 'Off', id: '0' },
    { label: 'Red: ', id: '1' },
    { label: 'Green', id: '2' },
    { label: 'Yellow', id: '3' },
    { label: 'Blue', id: '4' },
    { label: 'Magenta', id: '5' },
    { label: 'Cyan', id: '6' },
    { label: 'White', id: '7' },
    { label: 'Off Inverted', id: '8' },
    { label: 'Red Inverted', id: '9' },
    { label: 'Green Inverted', id: '10' },
    { label: 'Yellow Inverted', id: '11' },
    { label: 'Blue Inverted', id: '12' },
    { label: 'Magenta Inverted', id: '13' },
    { label: 'Cyan Inverted', id: '14' },
    { label: 'White Inverted', id: '15' }
  ]

  return {
    type: 'dropdown',
    label: 'Color',
    id: 'col',
    choices: colors,
    default: '0'
  }
}

export function TapeOperationPicker(): CompanionInputFieldDropdown {
  const tapeOperations = [
    { label: 'STOP', id: '0' },
    { label: 'PLAY PAUSE', id: '1' },
    { label: 'PLAY', id: '2' },
    { label: 'RECORD PAUSE', id: '3' },
    { label: 'RECORD', id: '4' },
    { label: 'FAST FORWARD', id: '5' },
    { label: 'REWIND', id: '6' }
  ]
  return {
    type: 'dropdown',
    label: 'Function',
    id: 'tFunc',
    choices: tapeOperations,
    default: '0'
  }
}
