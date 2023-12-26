import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store=>store.app.isMenuOpen)

  if(!isMenuOpen) return null;

  return (
      <div className='shadow-lg w-48 text-lg mt-5 pl-6 pb-6'>
        <div>
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <li>Explore</li>
            <li>Trending</li>
          </ul>
        </div>

        <div className='mt-5'>
          <h1 className='font-bold text-xl'>Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Gaming</li>
            <li>Tech</li>
            <li>Movie</li>
            <li>Sport</li>
          </ul>
        </div>
      </div>
  )
}


export default Sidebar