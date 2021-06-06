import { createStore } from 'redux'
import reducer from './reducer'
import { LanguageList, LanguageType } from './reducer/languageReducer'


// 全局store 类型
export interface GlobalStore {
  language: LanguageType,
  languageList: LanguageList,
}

export const defaultStore:GlobalStore = {
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

console.log(reducer)

export default createStore((state:GlobalStore = defaultStore, action) => {
  if(!reducer[action.type]) {
    return state
  }
  return reducer[action.type](state, action)
})
