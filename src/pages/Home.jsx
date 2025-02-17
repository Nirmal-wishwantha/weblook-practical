import { Typography } from '@mui/material'
import React from 'react'
import Navbar from '../common/component/Navbar'
import HomeSlider from '../common/component/HomeSlider'
import MyComponent from '../common/component/MyComponent'
import Service from './Service'

export default function Home() {
  return (
    <div>
      <Navbar/>
      {/* <HomeSlider/> */}

      <MyComponent/>

      <Service/>
    
      
    </div>
  )
}
