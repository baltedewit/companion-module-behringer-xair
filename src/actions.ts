import InstanceSkel = require('../../../instance_skel')
import { CompanionActionEvent, CompanionActions } from '../../../instance_skel_types'
import {
  TypePicker,
  IndexPicker,
  MuteStatePicker,
  FaderLevelPresets,
  LabelName,
  ColorPicker,
  MuteGroupPicker,
  SnapshotPicker,
  TapeOperationPicker,
  ChannelPicker,
  BusPicker
} from './choices'
import { DeviceConfig } from './config'

export enum ActionId {
  Mute = 'mute',
  MainMute = 'mMute',
  UsbMute = 'usbMute',
  FaderLevel = 'fad',
  SendLevel = 'send',
  MainFader = 'mFad',
  UsbFader = 'usbFad',
  Label = 'label',
  MainLabel = 'mLabel',
  UsbLabel = 'usbLabel',
  Color = 'color',
  MainColor = 'mColor',
  UsbColor = 'usbColor',
  MuteGroup = 'mute_grp',
  LoadSnap = 'load_snap',
  TapeOperation = 'tape'
}

export function GetActionsList() {
  const actions: CompanionActions = {}

  // Mutes:
  actions[ActionId.Mute] = {
    label: 'Set mute',
    options: [TypePicker(), IndexPicker(), MuteStatePicker()]
  }
  actions[ActionId.MainMute] = {
    label: 'Set Main mute',
    options: [MuteStatePicker()]
  }
  actions[ActionId.UsbMute] = {
    label: 'Set USB Mute',
    options: [MuteStatePicker()]
  }

  // Fader levels:
  actions[ActionId.FaderLevel] = {
    label: 'Set fader level',
    options: [TypePicker(), IndexPicker(), FaderLevelPresets()]
  }
  actions[ActionId.SendLevel] = {
    label: 'Set channel Sends',
    options: [ChannelPicker(), BusPicker(), FaderLevelPresets()]
  }
  actions[ActionId.MainFader] = {
    label: 'Set main fader level',
    options: [FaderLevelPresets()]
  }
  actions[ActionId.UsbFader] = {
    label: 'Set USB fader level',
    options: [FaderLevelPresets()]
  }

  // Set labels
  actions[ActionId.Label] = {
    label: 'Set label',
    options: [TypePicker(), IndexPicker(), LabelName()]
  }
  actions[ActionId.MainLabel] = {
    label: 'Set main label',
    options: [LabelName()]
  }
  actions[ActionId.UsbLabel] = {
    label: 'Set USB label',
    options: [LabelName()]
  }

  // Set color
  actions[ActionId.Color] = {
    label: 'Set color',
    options: [TypePicker(), IndexPicker(), ColorPicker()]
  }
  actions[ActionId.MainColor] = {
    label: 'Set main color',
    options: [ColorPicker()]
  }
  actions[ActionId.UsbColor] = {
    label: 'Set USB color',
    options: [ColorPicker()]
  }

  actions[ActionId.MuteGroup] = {
    label: 'Mute Group ON/OFF',
    options: [MuteGroupPicker(), MuteStatePicker()]
  }
  actions[ActionId.LoadSnap] = {
    label: 'Load Console Snapshot',
    options: [SnapshotPicker()]
  }
  actions[ActionId.LoadSnap] = {
    label: 'Load Console Snapshot',
    options: [SnapshotPicker()]
  }
  actions[ActionId.TapeOperation] = {
    label: 'Tape Operation',
    options: [TapeOperationPicker()]
  }

  return actions
}

export function HandleAction(instance: InstanceSkel<DeviceConfig>, action: CompanionActionEvent) {
  const opt = action.options
  const actionId = action.action as ActionId
  let arg:
    | {
        type: string
        value: any
      }
    | undefined
  let nVal: any
  let cmd: string | undefined

  try {
    switch (actionId) {
      case 'mute':
        arg = {
          type: 'i',
          value: parseInt(opt.mute)
        }
        if (opt.type == '/ch/') {
          if (opt.num <= 9) {
            nVal = ('0' + parseInt(opt.num)).substr(-2)
          }
          if (opt.num >= 10) {
            nVal = parseInt(opt.num)
          }
        }
        if (opt.type != '/ch/') {
          nVal = parseInt(opt.num)
        }

        cmd = opt.type + nVal + '/mix/on'
        break

      case 'mMute':
        arg = {
          type: 'i',
          value: parseInt(opt.mute)
        }
        cmd = '/lr/mix/on'
        break

      case 'usbMute':
        arg = {
          type: 'i',
          value: parseInt(opt.mute)
        }
        cmd = '/rtn/aux/mix/on'
        break

      case 'fad':
        arg = {
          type: 'f',
          value: parseFloat(opt.fad)
        }
        if (opt.type == '/ch/') {
          if (opt.num <= 9) {
            nVal = ('0' + parseInt(opt.num)).substr(-2)
          }
          if (opt.num >= 10) {
            nVal = parseInt(opt.num)
          }
        }
        if (opt.type != '/ch/') {
          nVal = parseInt(opt.num)
        }
        cmd = opt.type + nVal + '/mix/fader'
        break

      case 'send':
        arg = {
          type: 'f',
          value: parseFloat(opt.fad)
        }
        if (opt.chNum <= 9) {
          nVal = ('0' + parseInt(opt.chNum)).substr(-2)
        }
        if (opt.chNum >= 10) {
          nVal = parseInt(opt.chNum)
        }

        cmd = '/ch/' + nVal + '/mix/' + '0' + opt.busNum + '/level'
        break

      case 'mFad':
        arg = {
          type: 'f',
          value: parseFloat(opt.fad)
        }
        cmd = '/lr/mix/fader'
        break

      case 'usbFad':
        arg = {
          type: 'f',
          value: parseFloat(opt.fad)
        }
        cmd = '/rtn/aux/mix/fader'
        break

      case 'label':
        arg = {
          type: 's',
          value: '' + opt.lab
        }
        if (opt.type == '/ch/') {
          if (opt.num <= 9) {
            nVal = ('0' + parseInt(opt.num)).substr(-2)
          }
          if (opt.num >= 10) {
            nVal = parseInt(opt.num)
          }
        }
        if (opt.type != '/ch/') {
          nVal = parseInt(opt.num)
        }
        cmd = opt.type + nVal + '/config/name'
        break

      case 'mLabel':
        arg = {
          type: 's',
          value: '' + opt.lab
        }
        cmd = '/lr/config/name'
        break

      case 'usbLabel':
        arg = {
          type: 's',
          value: '' + opt.lab
        }
        cmd = '/rtn/aux/config/name'
        break

      case 'color':
        arg = {
          type: 'i',
          value: parseInt(opt.col)
        }
        if (opt.type == '/ch/') {
          if (opt.num <= 9) {
            nVal = ('0' + parseInt(opt.num)).substr(-2)
          }
          if (opt.num >= 10) {
            nVal = parseInt(opt.num)
          }
        }
        if (opt.type != '/ch/') {
          nVal = parseInt(opt.num)
        }
        cmd = opt.type + nVal + '/config/color'
        break

      case 'mColor':
        arg = {
          type: 'i',
          value: parseInt(opt.col)
        }
        cmd = '/lr/config/color'
        break

      case 'usbColor':
        arg = {
          type: 'i',
          value: parseInt(opt.col)
        }
        cmd = '/rtn/aux/config/color'
        break

      case 'mute_grp':
        arg = {
          type: 'i',
          value: parseInt(opt.mute)
        }
        cmd = '/config/mute/' + opt.mute_grp
        break

      case 'load_snap':
        arg = {
          type: 'i',
          value: parseInt(opt.snap)
        }
        cmd = '/-snap/load'
        break

      case 'tape':
        arg = {
          type: 'i',
          value: parseInt(opt.tFunc)
        }
        cmd = '/-stat/tape/state'
        break

      default:
        instance.debug('Unknown action: ' + action.action)
        cmd = undefined
        arg = undefined
    }

    if (cmd !== undefined) {
      instance.system.emit('osc_send', instance.config.host, 10024, cmd, [arg])
      instance.debug(cmd, arg)
    }
  } catch (e) {
    instance.debug('Action failed: ' + e)
  }
}
