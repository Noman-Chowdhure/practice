import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Info = () => {
    const dta = useLoaderData();
  return (
    <div>
      <h1>{dta.name}</h1>e
    </div>
  )
}

export default Info
