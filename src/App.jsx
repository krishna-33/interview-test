import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/header'
import SideBar from './layout/sidebar'
import ClippedDrawer from './layout'
import router from './router'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      {/* <ClippedDrawer /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
