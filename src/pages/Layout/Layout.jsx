import React from 'react'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import "./layout.css"

const layout = () => {
  return (
    <div className="app-container">
        <Header />
        <Outlet />
    </div>
  )
}

export default layout
