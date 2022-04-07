import React from 'react';
import './Coin.css' ;


const Coin = (props) => {
  const {image,name,price,pricechange,marketcap,marketcaprank} = props ;
  return (
    <>
        <div className="coin-container coin-bacg" >
            <div className="coin-row">
            <p style={{color:"rgb(252, 116, 116)"}}>{marketcaprank})</p>
                <div className="coin">
                    
                    <img src={image} alt="crypto" />
                    <h1 style={{color:"white"}}>{name}</h1>
                </div>
                <div className="coin-data">
                    <p className="coin-price" style={{color:"white"}}>Rs.{price}</p>
                    {pricechange<0 ? (
                        <p className="coin-percent red">{pricechange.toFixed(3)}%</p>
                    ):(
                        <p className="coin-percent green">+{pricechange.toFixed(3)}%</p>
                    )
                }
                <p className="coin-marketcap" style={{color:"white"}} >
                    Mkt Cap: Rs.{marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
  
    </>
  ) ;
}

export default Coin ;