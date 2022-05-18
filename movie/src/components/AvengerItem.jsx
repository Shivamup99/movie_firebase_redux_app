import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchAvengers } from "../features/api/movieDataApi";
import { selectMovieData } from "../features/movieDataSlice";
import Footer from './Footer'
function AvengerItem() {
  const dispatch = useDispatch();
  const { movieData, loading, hasErrors } = useSelector(selectMovieData);
  //console.log("dssoksok", movieData);
  useEffect(() => {
    dispatch(fetchAvengers());
  }, [dispatch]);
  return (
    <>
     <div className="star-grids">
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

export default AvengerItem