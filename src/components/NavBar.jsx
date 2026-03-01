import React from 'react'
import { navLinks } from '../constants'
import { images, icons } from '../utils/paths'

const NavBar = () => {
  return (
    <header>
      <nav className='container-section'>
        <img src={images.logo} alt='Apple logo' loading="eager" />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <a href={label}>{label}</a>
            </li>
          ))}
        </ul>

        <div className='flex-center gap-3'>
          <button>
            <img src={icons.search} alt="Search" loading="eager" />
          </button>
          <button>
            <img src={icons.cart} alt="Cart" loading="eager" />
          </button>
        </div>

      </nav>
    </header>
  )
}

export default NavBar