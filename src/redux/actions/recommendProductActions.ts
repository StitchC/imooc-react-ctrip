import { ThunkAction } from 'redux-thunk'
import { GlobalStore } from '../store'
import Request, { ProductData } from '../../request'

export const UPDATE_RECOMMEND_PRODUCT_LIST = 'UPDATE_RECOMMEND_PRODUCT_LIST'

export interface UpdateRecommendProductListAction {
  type: typeof UPDATE_RECOMMEND_PRODUCT_LIST,
  payload: Array<ProductData>
}

export const updateRecommendProductListActionCreator = (data:Array<ProductData>):UpdateRecommendProductListAction => {
  return {
    type: UPDATE_RECOMMEND_PRODUCT_LIST,
    payload: data,
  }
}

// ThunkAction 是 redux-thunk 处理异步操作的返回值数据类型
// 泛型第一个参数 代表 redux-thunk 中 函数的action 的返回值
// 泛型第二个参数 代表当前的 redux store 数据结构
// 泛型第三个参数 代表额外参数
// 泛型第四个参数 代表action 的返回值数据类型
export const fetchRecommendProductListActionCreator = (beforeFetch?:() => any, afterFetch?:(err:Error | null) => any):ThunkAction<void, GlobalStore, undefined, UpdateRecommendProductListAction> => async (dispatch, getState) => {
  try{
    beforeFetch && beforeFetch()
    const res = await Request.TravelPath.getProductCollections()
    dispatch(updateRecommendProductListActionCreator(res.data))
  }catch(err) {
    afterFetch && afterFetch(err)
    console.error('获取产品列表失败', err)
    return
  }

  afterFetch && afterFetch(null)
}
