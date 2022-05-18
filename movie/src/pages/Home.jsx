import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Movies from '../components/Movies'
import Viwers from '../components/Viwers'
import db from '../firebase'
import {useDispatch,useSelector} from 'react-redux'
import { setMovies } from '../features/movieSlice'
import { selectMovieRoute } from '../features/movieRouteSlice'
import { fetchFirebaseWatchMovie } from '../features/api/movieDataApi'
import Slider from "react-slick";
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import EndMovie from '../components/EndMovie'
function Home() {
  const dispatch = useDispatch()
  const {movieRoute , loading } = useSelector(selectMovieRoute)
  useEffect(()=>{
     dispatch(fetchFirebaseWatchMovie())
  },[dispatch])
  useEffect(()=>{
    db.collection('movies').onSnapshot((snapshot)=>{
      let response = snapshot.docs.map((item)=>{
        return {id:item.id, ...item.data()}
      })
       dispatch(setMovies(response))
    })
  },[])
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className='home'>
        <Banner/>
        <Viwers/>
        <h4 className="trend-h4" style={{color:'white'}}>Trendings in 2022 for you</h4>
      <Slider {...setting} >
        {movieRoute && movieRoute.map((item,i)=>(
            loading ?
            <p style={{color:'white'}}>Loading wait</p> :(
            <div className="homes-wrap" key={i}>
            <Link to={`/movie/information/${item.id}`}>
             <img src={item.postUrl} alt={item.title} className='homes-img'/>
             </Link>
            </div>
            )
          
        ))}
      </Slider>
        <Movies/>
        <EndMovie/>
        <Footer/>
    </div>
  )
}

export default Home