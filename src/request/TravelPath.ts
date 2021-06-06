import Core from './Core'
import { AxiosPromise } from "axios";

export default class TravelPath extends Core {
  constructor() {
    super()
  }

  getProductCollections(params?:any):AxiosPromise {
    return this.get('http://123.56.149.216:8080/api/productCollections')
  }
}
