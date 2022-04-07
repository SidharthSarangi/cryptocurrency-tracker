import React, { useEffect, useState } from 'react' ;
import Topper from './Topper';

const Top = () => {
    
    const [state,setState] = useState([]) ;

    const getTop= async ()=>{
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=3&page=1&sparkline=false') ;
        const parsed =await response.json() ;
        setState(parsed) ; 
    }
    useEffect(()=>{
        getTop() ;
    },[]) ;

    return (
    <>  
        <div className='container' style={{background:"white", color:"white"}}>
                <div className='row'>
                    {
                        state.map((ele,i)=>{
                            return(
                                <div className='col' key={i}>
                                    <Topper
                                        name={ele.name}
                                        img={ele.image}
                                        price={ele.current_price}
                                        mktcap={ele.market_cap}
                                        rank={ele.market_cap_rank}
                                        change={ele.price_change_percentage_24h}
                                    />
                                </div>
                            ) ;
                        })
                    }
                </div>
        </div> 
            
    </>
  ) ;
}

export default Top ;