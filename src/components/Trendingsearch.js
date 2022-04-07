import React,{useState,useEffect} from 'react' ;
import TrendingItems from './TrendingItems' ;
import "./style.css" ;
import Trend from './Trend';

const Trendingsearch = () => {
    const [trend, setTrend] = useState({
        coins: [],
        item:[]
    });
    
    const getTrending = async ()=> {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending') ;
        const parsed = await response.json() ;
        console.log(parsed) ;
        setTrend({
            coins: parsed.coins,
            item: parsed.coins.item
        }) ;
        // console.log(await response.json()) ;
    }
    useEffect(()=>{
        getTrending() ;
    },[]) ;


  return (
    <>  
        <h1 style={{color:"rgb(255, 237, 189",margin:"40px"}}>Trending 7 Coin Searches </h1>
        <Trend/> 
        {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{margin:"40px"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={3} aria-label="Slide 4" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={4} aria-label="Slide 5" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={5} aria-label="Slide 6" />
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={6} aria-label="Slide 7" />
        </div>
        <div className="carousel-inner">
                     
            {
                trend.coins.map((curEle,i)=> {
                    return(
                        <div className="carousel-item active" data-bs-interval="100" key={i}>
                            <TrendingItems
                                img={curEle.item.large} 
                                name={curEle.item.name}  
                                marketcaprank={curEle.item.market_cap_rank}
                            />
                      </div>
                    ); 
                }) 
            }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
      <div className='container-fluid'>
          <div className='row'>
          {
                trend.coins.map((curEle,i)=> {
                    return(
                        <div className="col trend-col" key={i}>
                            <TrendingItems
                                img={curEle.item.large} 
                                name={curEle.item.name}  
                                marketcaprank={curEle.item.market_cap_rank}
                            />
                      </div>
                    ); 
                }) 
            }

          </div>

      </div>
        
    </>
  )
}

export default Trendingsearch