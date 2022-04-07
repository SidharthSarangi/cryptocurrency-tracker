import React from 'react';
import "./style.css" ;
import "./Coin.css" ;

const Topper = (props) => {
    const {name,rank,mktcap,img,price,change} =props ;
    return(
        <>
            <div className='card top1-class zoom' style={{width: '23rem', height:"auto",margin:'15px'}} id="best-3">
                <img src={img} className="card-img-top" alt="..." style={{height:"auto",width:"auto"}}/>
                <div className="card-body top1-card">
                    <h5 className="card-title">{name}</h5>
                    {/* <p className="card-text">Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p> */}
                    <p style={{color:"gold"}}>Current Price: Rs {price}</p>
                    <p style={{color:"gold"}}>Market Cap: Rs {mktcap}</p>
                    {change<0 ? (
                            <p className="coin-percent red">↓ {change.toFixed(3)}%</p>
                        ):(
                            <p className="coin-percent green">↑ {change.toFixed(3)}%</p>
                        )
                    }
                    <a href="https://en.wikipedia.org/wiki/Bitcoin" className="btn btn-primary" target="_blank">Know More</a>
                    <h1>{rank}.</h1>
                </div>
            </div>
        </>
    ) ;
}

export default Topper