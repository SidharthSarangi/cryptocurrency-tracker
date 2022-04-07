import React, {useState,useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';
import "./style.css" ;

const ScrollButton = () =>{

// const [visible, setVisible] = useState(false)

// const toggleVisible = () => {
// 	const scrolled = document.documentElement.scrollTop;
// 	if (scrolled > 300){
// 	setVisible(true)
// 	}
// 	else if (scrolled <= 300){
// 	setVisible(false)
// 	}
// };

// const scrollToTop = () =>{
// 	window.scrollTo({
// 	top: 0,
// 	behavior: 'smooth'
// 	/* you can also use 'auto' behaviour
// 		in place of 'smooth' */
// 	});
// };

// window.addEventListener('scroll', toggleVisible);

// return (
// 	<Button>
// 	<FaArrowCircleUp onClick={scrollToTop}
// 	style={{display: visible ? 'inline' : 'none' , color:"rgb(252, 116, 116)"}} className="scroll-button" />
// 	</Button>
// );
const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <>
        {showButton && (
        <button onClick={scrollToTop} className="back-to-top" style={{color:"rgb(252, 116, 116)"}}>
          &#8679;
        </button>
      )}
      {/* &#8679; is used to create the upward arrow */}
    </>
  );
}

export default ScrollButton;
