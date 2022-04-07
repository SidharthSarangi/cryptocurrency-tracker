import React from 'react';
import "./style.css" ;

const Top1 =()=>{
    // const {img,name,rank,price,mktcap} = props ;
    const img="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579" ;
    const name="Bitcoin" ;
    return(
        <>
            <div className='card top1-class' style={{width: '23rem', height:"auto",margin:'15px'}} id="best-3">
                <img src={img} className="card-img-top" alt="..." style={{height:"auto",width:"auto"}}/>
                <div className="card-body top1-card">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.</p>
                    <a href="https://en.wikipedia.org/wiki/Bitcoin" className="btn btn-primary" target="_blank">Know More</a>
                    <h1>1.</h1>
                </div>
            </div>
        </>
    ) ;
}

export default Top1 ;