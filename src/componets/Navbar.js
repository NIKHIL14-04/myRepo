import React from 'react'

import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
    <div className='row'>
      <div className='col-10 mx-auto'>

   
    <nav className="navbar navbar-expand-lg navbar-light bg-white mt-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">NIck<span>TEch</span></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Service">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Contact">Contact</Link>
          </li>
         
        
        </ul>
      
      </div>
    </div>
  </nav>
  </div>
  </div>
    </div>
  )

}

export default Navbar