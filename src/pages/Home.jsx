import React from 'react'

import Navbar from "../components/Navbar"
import MainBanner from '../components/MainBanner'
import Category from '../components/Category'
import Products from '../components/Products'
import Collections from '../components/Collections'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <>
        <Navbar />
        <MainBanner />
        <Category />
        <Products />
        <Collections />
        <BestSeller />
    </>
  )
}

export default Home