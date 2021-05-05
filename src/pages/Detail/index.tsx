import React from 'react'
import { RouteComponentProps, useParams } from 'react-router-dom'

interface RouteParams {
  id:string,
}

const DetailPage:React.FC<RouteComponentProps<RouteParams>> = (props) => {
  const params = useParams<RouteParams>()
  return (
    <h1>旅游详情页, id: {params.id}</h1>
  )
}

export default DetailPage