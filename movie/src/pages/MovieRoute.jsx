import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { fetchFirebaseWatchMovie } from '../features/api/movieDataApi'
import { selectMovieRoute } from '../features/movieRouteSlice'

function MovieRoute() {
    const dispatch = useDispatch()
    const {movieRoute , loading , hasError} = useSelector(selectMovieRoute)
    useEffect(()=>{
       dispatch(fetchFirebaseWatchMovie())
    },[dispatch])
    //  console.log('firebae', movieRoute)

  return (
    <>
    <div className="movieRoute">
        {loading ? <p>loding please wait</p>:(
          <div className="movieRoute-wrap">
           {movieRoute && movieRoute.map((item)=>(
               <div className="movieRoute-grid" key={item.id}>
                   <Link to={`/movie/information/${item.id}`}>
                   <img src={item.postUrl} alt={item.id} className='movieRoute-img'/>
                   </Link>
               </div>
           ))}
          </div>
        )}
        
    </div>
    <Footer/>
    </>
  )
}

export default MovieRoute