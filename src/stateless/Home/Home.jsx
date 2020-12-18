import React from 'react'
import HomeCard from '../../stateful/home/HomeCard'
import Header from '../nav/Header.jsx'

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Header />
      <h3>Featured</h3>
      <HomeCard />
    </div>
  )
}

export default Home
