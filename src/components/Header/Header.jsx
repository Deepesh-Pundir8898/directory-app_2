import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
        <header>
          <h2>Deepesh Pundir Directory App</h2>
        </header>
        <nav>
          <ul>
            <li>
              <Link to="/">Add New Person</Link>
            </li>
            <li>
              <Link to="/info">Retrieve Information</Link>
            </li>
          </ul>
        </nav>
    </>
  )
}

export default Header
