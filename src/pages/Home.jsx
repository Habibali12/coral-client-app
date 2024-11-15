import React from 'react'

import MainBanner from '../components/MainBanner'
import Category from '../components/Category'
import Products from '../components/Products'
import Collections from '../components/Collections'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <>
        <MainBanner />
        <Category />
        <Products />
        <Collections />
        <BestSeller />
    </>
  )
}

export default Home