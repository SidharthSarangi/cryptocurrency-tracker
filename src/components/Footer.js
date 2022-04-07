import React from 'react' 
import facebook from "./img/facebook.png"
import github from "./img/github.png"
import linkedin from "./img/linkedin.png"
import google from "./img/google.png"

const Footer = () => {
  return (
    <>
             
            <footer className="bg-dark text-center text-white" id="contact-us">
            {/* Grid container */}
            
                {/* Section: Social media */}
                {/* Facebook */}
                <a className="btn btn-outline-light btn-floating m-1"  target="_blank" href="https://www.facebook.com" role="button">
                    <img src={facebook}></img>
                </a>
                {/* Twitter */}
                <a className="btn btn-outline-light btn-floating m-1"  target="_blank" href="https://www.twitter.com" role="button">
                <img src="https://www.pinclipart.com/picdir/big/150-1505841_cigarettes-clip-art.png" style={{height:"48px"}}></img>
                </a>
                {/* Google */}
                <a className="btn btn-outline-light btn-floating m-1" target="_blank"  href="https://www.google.com/" role="button">
                <img src={google}></img>
                </a>
                {/* Instagram */}
                <a className="btn btn-outline-light btn-floating m-1" target="_blank"  href="https://www.instagram.com" role="button">
                <img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" style={{height:"48px"}}></img>
                </a>
                {/* Linkedin */}
                <a className="btn btn-outline-light btn-floating m-1" target="_blank"  href="https://www.linkedin.com" role="button">
                <img src={linkedin}></img>
                </a>
                {/* Github */}
                <a className="btn btn-outline-light btn-floating m-1" target="_blank"  href="https://www.github.com" role="button">
                <img src="https://cdn3.iconfinder.com/data/icons/inficons/512/github.png" style={{height:"48px"}}></img>
                </a>
                {/* Section: Social media */}
            {/* Grid container */}
            {/* Copyright */}
            <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
                © 2022 Copyright: 
                <h4>Made with ❤ </h4>
            </div>
            {/* Copyright */}
            </footer>
        {/* End of .container */}
    </>
  ) ;
}

export default Footer ;