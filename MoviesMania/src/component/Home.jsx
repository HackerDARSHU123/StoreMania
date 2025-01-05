import React from 'react'
import Sidenav from './templates/Sidenav'
import Topnav from './templates/Topnav'
import ProductList from './Productlist'

const Home = () => {
  return (
    <div className='w-full flex'>
        <Sidenav></Sidenav>
        <div className='w-[80%] h-full flex flex-col'>
          <Topnav></Topnav>
          <ProductList/>
        </div>
    </div>
  )
}

export default Home