import {
  useSelector as useReduxSelector,
  TypedUseSelectorHook,
} from 'react-redux'
import { GlobalStore } from './store'

export const useLanguageSelector:TypedUseSelectorHook<GlobalStore> = useReduxSelector
