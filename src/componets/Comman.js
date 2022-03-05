import React from 'react'
// import img from '../img/java.png'
import App from '../App.css'
import { Link } from 'react-router-dom'
const Comman = (props) => {
  return (
    <div className="container">
      <div className="row mx-auto">
        <div className="col-md-6  order-1  order-2 bg-white my-5 d-flex justify-content-center flex-column text-center mr-auto">
          <h1 className='my-5'>{props.Title}</h1>
          <h2>For MOre in formation<strong><span> NIcTEch</span></strong></h2>
          <p>{props.des1}</p>

          <button type="button" className="btn btn-primary btn-sm mx-auto my-5"><Link to={props.visit}>{props.btn1}</Link></button>

        </div>

        <div className="col-md-6  order-1  order-1 bg-white d-flex justify-content-center my-5 aline-iteam-center">
          <img src={props.imgr} className='img-fluid' alt="my" />
        </div>
      </div>
    </div>
  )
}

export default Comman