import { GlobalStore, defaultStore } from '../store'
import {
  CHANGE_LANGUAGE,
  ADD_LANGUAGE,
  ChangeLanguageAction,
  AddLanguageAction,
} from '../actions'

export type LanguageType = 'en' | 'zh' | string

export type LanguageList = Array<{ name:string, code:string }>

export default {
  [CHANGE_LANGUAGE](state:GlobalStore = defaultStore, action:ChangeLanguageAction):GlobalStore {
    return {
      ...state,
      language: action.payload
    }
  },

  [ADD_LANGUAGE](state:GlobalStore = defaultStore, action:AddLanguageAction):GlobalStore {
    return {
      ...state,
      languageList: [...state.languageList, action.payload]
    }
  }
}