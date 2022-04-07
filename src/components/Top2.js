import React from 'react'

const Top2 = () => {
    // const {img,name,rank,price,mktcap} = props ;
    const img="https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880" ;
    const name= "Ethereum" ;
    return(
        <>
            <div className="card" style={{width: '18rem',margin:'50px'}}>
                <img src={img} className="card-img-top" alt="..." style={{height:"auto",width:"auto"}}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Ethereum is a decentralized, open-source blockchain with smart contract functionality......</p>
                    <a href="https://en.wikipedia.org/wiki/Ethereum" className="btn btn-primary" target="_blank">Know More</a>
                    <h1>2.</h1>
                </div>
            </div>
        </>
    ) ;
}

export default Top2 ;