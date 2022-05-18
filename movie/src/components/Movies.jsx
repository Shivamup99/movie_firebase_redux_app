import React from 'react'
import { useSelector } from 'react-redux'
import { selectMovies } from '../features/movieSlice'
import {Link} from 'react-router-dom'
function Movies() {
  const movies = useSelector(selectMovies)
  return (
    <>
    <div className='movie'>
    <h4>Recomneded For You</h4>
    <div className="movie-content">
        {movies.map((item)=>(
            <div className="movie-img-wrap" key={item.title}>
              <Link to={`/details/${item.id}`}>
                <img src={item.cardImg} alt={item.id} className='movie-img'/>
                </Link>
            </div>
        ))}
    </div>
    </div>
    </>
  )
}

export default Movies