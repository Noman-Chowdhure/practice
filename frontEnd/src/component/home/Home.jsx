import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

const Home = () => {
  const info = useLoaderData();

  return (
    <div>
      {
        info.map(abc => <Link to={`/info/${abc.id}`} className=' ps-4' key={abc.id}>{abc.name}, {abc.email}</Link>)
      }
    </div>
  )
}

export default Home
