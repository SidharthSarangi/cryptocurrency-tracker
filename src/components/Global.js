import React,{useState,useEffect} from 'react'
import "./style.css"

const Global = () => {
    const [currGlobal, setCurrGlobal] = useState({
        totalMarketCap:[],
        totalVol:[],
        totalCoins:[]
    }) ;
    // const [marketCap, setMarketCap] = useState([]) ;
    // const [totalVol , setTotalVol] = useState([]) ;

    const getGlobal = async ()=> {
        const response = await fetch('https://api.coingecko.com/api/v3/global') ;
        const parsed =await response.json() ;
        setCurrGlobal({
            totalMarketCap: parsed.data.total_market_cap ,
            totalVol: parsed.data.total_vol,
            totalCoins: parsed.data.active_cryptocurrencies
        }) ; 
        // setMarketCap(parsed.data.total_market_cap) ;
        // setTotalVol(parsed.data.total_volume) ;
        // console.log(await response.json()) ;
    }
    useEffect(()=>{
        getGlobal() ;
    },[]) ;
    
    
    // console.log(currGlobal) ;
    console.log(currGlobal.totalMarketCap) ;
    console.log(currGlobal.totalVol) ;

    function sum( obj ) {
        var sumCap = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sumCap += parseInt( obj[el] );
          }
        }
        return sumCap;
    }

    function another( obj ) {
        var sumVol = 0;
        for( var el in obj ) {
          if( obj.hasOwnProperty( el ) ) {
            sumVol += parseInt( obj[el] );
          }
        }
        return sumVol;
    }

    const finalMarketCap= sum(currGlobal.totalMarketCap) ;
    const finalTotalVol = another(currGlobal.totalVol) ;
    return (
    <>  
        <div className='container global'>
            <h1 style={{color:"rgb(255, 237, 189"}}>Global Stats</h1>
            <h3 style={{color:"rgb(181, 181, 181)"}}>Active Cryptos: {currGlobal.totalCoins}</h3>
            
            {/* {
                Object.keys(currGlobal.totalMarketCap).map((curEle,i)=>{  
                    finalMarketCap += currGlobal.totalMarketCap[curEle] 
                })

            }
            
            {
                Object.keys(currGlobal.totalVol).map((curEle,i)=>{  
                    finalTotalVol += currGlobal.totalVol[curEle] 
                })
                
            }
            */}
        {/* <h5>Total Vol: {finalTotalVol}</h5>  */}
        {/* <h5>Total Market Cap: {finalMarketCap}</h5> */}
            
        </div>
    </>
  )
}

export default Global