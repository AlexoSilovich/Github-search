import React from 'react'
import {Link} from 'react-router-dom'

export function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[70px] px-5 shadow-md bg-blue-600 text-white">
      <h3 className='font-bold text-xl'>
        <Link className="hover:text-yellow-400" to="/">GitHub Search</Link>
      </h3>

      <span>
        <Link to="/" className="mr-5 hover:text-yellow-400 text-lg">Home</Link>
        <Link to="/favourites" className="hover:text-yellow-400 text-lg">Favourites</Link>
      </span>
    </nav>
  );
}

