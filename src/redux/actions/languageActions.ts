import { LanguageType } from '../reducer/languageReducer'

export interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: LanguageType
}

export interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: { name:string, code:string },
}

export const CHANGE_LANGUAGE = 'change_language'

export const ADD_LANGUAGE = 'add_language'

export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction


export const changeLanguageAction = (languageCode: LanguageType):ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  }
}

export const addLanguageAction = (name:string, code:string):AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code, }
  }
}