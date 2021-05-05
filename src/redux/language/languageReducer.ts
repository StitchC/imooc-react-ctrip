import {
  ADD_LANGUAGE,
  CHANGE_LANGUAGE,
  LanguageActionTypes,
} from './languageActions'

export type LanguageType = 'en' | 'zh' | string

export type LanguageList = Array<{ name: string, code: string }>

interface LanguageStsate {
  language: LanguageType,
  languageList: LanguageList,
}

const defaultLanguage: LanguageStsate = {
  language: 'zh',
  languageList: [
    {
      name: '中文',
      code: 'zh',
    },
    {
      name: 'English',
      code: 'en',
    }
  ]
}

export default (state: LanguageStsate = defaultLanguage, action: LanguageActionTypes): LanguageStsate => {
  switch (action.type) {
    case ADD_LANGUAGE: {
      return {
        ...state,
        languageList: [...state.languageList, action.payload]
      }
    }

    case CHANGE_LANGUAGE: {
      return {
        ...state,
        language: action.payload,
      }
    }

    default: {
      return state
    }
  }
}
