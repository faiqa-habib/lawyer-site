
import React from 'react';

import { Navbar } from "../common/Navbar"; 
import {Logo} from '../common/Logo'

export const Header = () => {
  return (
    <nav className="navbar">
      <div className='width-container'>
        <div className='flex justify-between items-center'>
        <Logo />
        <Navbar />
        </div>
      </div>  
  </nav>
  )
}
