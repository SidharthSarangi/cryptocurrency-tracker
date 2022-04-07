import React,{useState,useEffect} from 'react' ;
import Newsitem from './Newsitem';


const News = () => {
    const [currNews, setCurrNews] = useState([]) ;
    //const [search, setSearch] = useState('') ;

    const getNews = async ()=> {
        const response = await fetch('https://newsdata.io/api/1/news?apikey=pub_6206f76527790b64b98bf580ebe1c2a7753b&q=cryptocurrency') ;
        const data =await response.json() ;
        setCurrNews(data.results) ; 
        // console.log(await response.json()) ;
    }
    useEffect(()=>{
        getNews() ;
    },[]) ;
   
    console.log(currNews) ;
  
  return (
    <>

        <h1 id="top-10" style={{color:"gold",margin:"90px"}}>Top 10 News Headlines</h1>

        <div className="container my-3" style={{background:"white", color:"white"}}>
            <div className='row'>
                    {
                        currNews.map((curEle,i)=> {
                            return (
                            <div className='col-md-4' key={i}>
    
                                <Newsitem
                                    title={curEle.title} 
                                    img={curEle.image_url} 
                                    desc={curEle.description}
                                    link={curEle.link}
                                />
                                
                            </div> 
                            ) ;
                        }) 
                    }
                  
                
            {/* <div className='col-md-4'>
                Is it working fine
                <Newsitem/>
            </div>
            <div className='col-md-4'>
                Is it working fine
            </div>
            <div className='col-md-4'>
                Is it working fine
            </div>
            <div className='col-md-4'>
                Is it working fine
            </div>
            <div className='col-md-4'>
                Is it working fine
            </div>
            </div> */}
            </div>
        </div> 
        
    </>
  ) ;
}

export default News ;