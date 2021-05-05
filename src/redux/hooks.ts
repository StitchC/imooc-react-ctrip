import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { LanguageState } from './store'

export const useLanguageSelector:TypedUseSelectorHook<LanguageState> = useReduxSelector
