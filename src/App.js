import React from 'react'
// import Coordinates from './components/Coordinates'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Base from './components/Base'

const App = () => {
  return (
    <>
      {/* <Coordinates /> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Base' element={<Base />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
