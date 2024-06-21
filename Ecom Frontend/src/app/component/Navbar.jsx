'use client'
import React from 'react'




function Navbar() {
  
  return (
     <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
   
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        
      </ul>
    </div>
    <a  href="/" className="btn btn-ghost text-xl">Ecom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/pages/elctronic'>Elctronic</a></li>
    <li><a href='/pages/watch'>watch</a></li>
      <li><a href='/pages/mobile'>mobile</a></li>
    </ul>
  </div>
  <div className="navbar-end flex flex-row gap-1">

    <a href='/pages/login' className="btn">Log in</a>
    <a href='/pages/ragister' className="btn btn-neutral">Sign Up</a>
  </div>
</div>
  )
}

export default Navbar