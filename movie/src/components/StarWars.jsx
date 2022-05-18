import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieData } from "../features/api/movieDataApi";
import { selectMovieData } from "../features/movieDataSlice";
import Footer from './Footer'
import "./starWars.css";
function StarWars() {
  const dispatch = useDispatch();
  const { movieData, loading, } = useSelector(selectMovieData);
  //console.log("dssoksok", movieData);
  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);
  return (
      <>
      <div className="background-container">
      <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hm_m1/sources/r1/cms/prod/7040/677040-m" className='star' alt='jkjk' />
    </div>
    <div className="star-grid">
    { movieData.map((item)=>{
           return(
            <div className="star-container" key={item.Title}>
              <img src={item?.Poster} className='star-img' alt={item.Title}/>  
            </div>
           
           )
        })
       }
    </div>
    <Footer/>
      </>
  ) 
}

export default StarWars;

{
  /* 
     
<div className="star-card"> */
}
