interface LanguageListItem {
  name:string
  code:string
}

interface LanguageState {
  language: languageType
  languageList: LanguageListType
}

const defaultState:LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: '英文', code: 'en' },
  ]
}

export type languageType = 'en' | 'zh'

export type LanguageListType = Array<LanguageListItem>

export default (state = defaultState, action) => {
  return state
}
