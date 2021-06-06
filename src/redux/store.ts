import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { actionLog } from './middleware/actionLog'
import { ProductData } from '../request'
import reducer from './reducer'
import { LanguageList, LanguageType } from './reducer/languageReducer'


// 全局store 类型
export interface GlobalStore {
  language: LanguageType
  languageList: LanguageList
  productData:Array<ProductData>
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
  ],
  productData: []
}

export default createStore((state:GlobalStore = defaultStore, action) => {
  if(!reducer[action.type]) {
    return state
  }
  return reducer[action.type](state, action)
}, applyMiddleware(thunk, actionLog))
