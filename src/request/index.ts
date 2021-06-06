import TravelPath from './TravelPath'

export default class Request {
  static TravelPath = new TravelPath()
}

interface TouristRoutePictures {
  id: number
  touristRouteId: string
  url: string
}


export interface TouristRoutesData {
  createTime: string
  departureCity: string
  departureTime: string | null
  description: string
  discountPresent: number
  id: string
  originalPrice: number
  price: number
  rating: number
  title: string
  touristRoutePictures: Array<TouristRoutePictures>
  travelDays: string
  tripType: string
  updateTime: string | null
}

export interface ProductData {
  description: string
  id: number
  title: string
  touristRoutes: Array<TouristRoutesData>
}
