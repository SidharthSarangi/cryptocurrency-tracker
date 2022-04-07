import React,{useEffect, useState} from 'react' ;
import './style.css';
import Coin from './Coin.js' ;
import Top1 from './Top1';
import Top2 from './Top2';
import Top3 from './Top3';
import News from './News';

const Crypto = () => {
    
    const [curr, setCurr] = useState([]) ;
    const [search, setSearch] = useState('') ;

    const getCurr = async ()=> {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false') ;
        setCurr(await response.json()); 
        
    }
    useEffect(()=>{
        getCurr() ;
    },[]) ;

    console.log(curr) ;

    const handleChange = event => {
        setSearch(event.target.value) ;
    }

    const filteredCoins = curr.filter(currency=>
        currency.name.toLowerCase().includes(search.toLowerCase())     
    )
   
    return (
    <>
            {/* Not Dynamic */}
            {/* <div className='container' style={{background:"white", color:"white"}}>
                <div className='row'>
                    <div className='col'>
                    <Top2 />
                    </div>
                    <div className='col'>
                    <Top1 />
                    </div>
                    <div className='col'>
                    <Top3 />
                    </div>
                </div>
            </div>  */}
        

    <form className='form-class'>
        <label className='label-class'>
            Currency:
            <input className='search name' placeholder='Search the coin name' type="text" name="name" onChange={handleChange}/>
        </label>
    </form>
    {
        filteredCoins.map((curEle,i)=> {
            return(
                <div key={i}>
                <Coin
                   key={curEle.id} 
                   name={curEle.name} 
                   image={curEle.image} 
                   symbol={curEle.symbol}
                   marketcap={curEle.market_cap}
                   price={curEle.current_price}
                   pricechange={curEle.price_change_percentage_24h}
                   marketcaprank={curEle.market_cap_rank}
                />
                </div>
            ); 
        }) 
    }
    <News/>
    </>
  ) ;
}

export default Crypto ;