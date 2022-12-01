import React from 'react'
import Head from './Head'
import NavBar from './NavBar'
import Try from './Try'
import Product from './Product'
import Slider from './Slider'
import { Route, Routes } from 'react-router-dom'
import ProDetails from './ProDetails'
import Footer from './Footer'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<div className=''><NavBar /><Head /><Slider /><Product /><Footer/></div>} />
      <Route path='/category/:name' element={<Try />}/>
      <Route path='/:name' element={<ProDetails />}/>
    </Routes>
  )
}

export default App