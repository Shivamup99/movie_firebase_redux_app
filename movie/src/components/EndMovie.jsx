import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEndMovies} from "../features/api/movieDataApi";
import { selectMovieData } from "../features/movieDataSlice";

function EndMovie() {
  const dispatch = useDispatch();
  const { movieData, loading, } = useSelector(selectMovieData);
  //console.log("dssoksok", movieData);
  useEffect(() => {
    dispatch(fetchEndMovies());
  }, [dispatch]);
  return (
      <>
      <h3 className="end-h3">Some Best Movie Poster For You</h3>
    <div className="end-grid">
    { movieData.map((item)=>{
           return(
            <div className="end-container" key={item.Title}>
              <img src={item?.Poster} className='end-img' alt={item.Title}/>  
            </div>
           
           )
        })
       }
    </div>
      </>
  ) 
}

export default EndMovie;