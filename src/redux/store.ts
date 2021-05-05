import { createStore } from 'redux'
import languageReducer, { LanguageList, LanguageType } from './language/languageReducer'

const store = createStore(languageReducer)

export default store

export type LanguageState = ReturnType<typeof store.getState>

export type LanguageReducerList = LanguageList

export type LanguageReducerType = LanguageType
