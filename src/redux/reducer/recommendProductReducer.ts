import { GlobalStore, defaultStore } from '../store'
import {
  UPDATE_RECOMMEND_PRODUCT_LIST,
  UpdateRecommendProductListAction,
} from '../actions'

export default {
  [UPDATE_RECOMMEND_PRODUCT_LIST](state:GlobalStore = defaultStore, action:UpdateRecommendProductListAction):GlobalStore {
    return {
      ...state,
      productData: action.payload,
    }
  }
}
