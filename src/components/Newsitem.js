import React from 'react' ;
import "./style.css" ;

const Newsitem = (props) => {
    const {img,link,desc,title} = props ;
  return (
    <>
        <div className="card zoom-it" style={{width: '18rem',margin:"20px"}}>
            <img src={!img?"https://www.goodreturns.in/img/2021/05/crypto-currency-background-with-various-of-shiny-silver-and-golden-physical-cryptocurrencies-symbol-coins-bitcoin-ethereum-litecoin-zcash-ripple-stockpack-adobe-stock-1597x1065-1621416241.jpg":img} className="card-img-top" alt="img" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc.slice(0,200)}....</p>
                <a href={link} target="_blank" className="btn btn-primary">Read More</a>
            </div>
        </div>
       
    </>
  ) 
}

export default Newsitem ;