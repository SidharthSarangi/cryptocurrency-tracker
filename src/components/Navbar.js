import React from 'react'
import cryptologo from "./img/cryptologo.png"
import "./style.css"

const Navbar = () => {
  return ( 
    <>
        <nav className="navbar navbar-expand-lg navbar-light bg-warning fixed-top">
          {/* <img src={cryptologo} alt="logo" style={{height:"10px",}}></img> */}
          <a className="navbar-brand" href="#">Crypto Tracker</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto topnav">
              <li className="nav-item">
                <a className="nav-link" href="#best-3-title" style={{color:"rgb(252, 116, 116)"}} >Best 3</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"rgb(252, 116, 116)"}} href="#top-10">Top 10 News</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color:"rgb(252, 116, 116)"}} href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </nav>
      
    </>
  ) ;
}

export default Navbar