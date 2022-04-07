import React from 'react' ;
import "./style.css" ;

const TrendingItems = (props) => {
    const {img,marketcaprank,name} = props ;
  return (
    <>      
           <div className='trend-box'>
              <h3 style={{color:"rgb(252, 116, 116)",margin:"50px"}}>{name}</h3>
              <p style={{color:"gold"}}>Market Cap Rank: {marketcaprank}</p>
              <img src={img} className="rounded" alt="trend_img" style={{height:"100px",width:"100px"}} />
            </div>
        
    </>
  ) ;
}

export default TrendingItems ;