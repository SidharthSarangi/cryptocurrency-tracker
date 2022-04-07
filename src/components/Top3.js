import React from 'react'

const Top3 = () => {
    // const {img,name,rank,price,mktcap} = props ;
    const img="https://assets.coingecko.com/coins/images/325/large/Tether-logo.png?1598003707" ;
    const name="Tether" ;
    return(
        <>
        <div className="card" style={{width: '18rem' , margin:'50px'}}>
            <img src={img} className="card-img-top" alt="..." style={{height:"auto",width:"auto"}}/>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Tether is a cryptocurrency that is hosted on the Ethereum and Bitcoin blockchains, among others.....</p>
                <a href="https://en.wikipedia.org/wiki/Tether_(cryptocurrency)" className="btn btn-primary" target="_blank">Know More</a>
                <h1>3.</h1>
            </div>
        </div>
        </>
    ) ;
}

export default Top3 ;