import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import Productos from '../Pages/Productos'
import Home from '../Pages/Home'
import SobreNosotros from '../Pages/SobreNosotros'

const NavBar = () => {
  return (
    <div>
      <header className='flex flex-wrap justify-between items-end md:gap-4 text-zinc-400 bg-black py-4 px-4'>
        <nav className='uppercase'>
          <Link to='/' className='mr-4'>Home</Link>
          <Link to='/sobre-nosotros' className='mr-4'>Sobre Nosotros</Link>
          <Link to='/productos' className='mr-4'>Productos</Link>
        </nav>
        <div>
          <input type='text' />
        </div>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<SobreNosotros />} />
        <Route path='/' element={<Productos />} />
      </Routes>
    </div>
  )
}

export default NavBar
