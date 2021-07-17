interface LanguageListItem {
  name:string
  code:string
}

interface LanguageState {
  language: 'en' | 'zh'
  languageList: Array<LanguageListItem>
}

const defaultState:LanguageState = {
  language: 'zh',
  languageList: [
    { name: '中文', code: 'zh' },
    { name: '英文', code: 'en' },
  ]
}

export default (state = defaultState, action) => {
  return state
}
