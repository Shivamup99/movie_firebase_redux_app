import React, { useEffect, useState } from 'react'
import {Add, GroupAddOutlined, PlayArrow, PlayCircleOutline} from '@material-ui/icons'
import {useNavigate, useParams} from 'react-router-dom'
import db from '../firebase'
import Footer from '../components/Footer'
function MovieInfo() {
    const [movie,setMovie] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        db.collection('watchmovie').doc(id).get().then((doc)=>{
            if(doc.exists){
                setMovie(doc.data())
            }else{
               navigate('/')
            }
        })
    },[])
    // console.log(movie)
  return (
      <>

    <div className='details'>
    <div className="back-img">
        <img src={movie?.backgroundUrl} alt='vold' />
    </div>
    <div className="img-titles">
       <h1>{movie?.title}</h1>
    </div>
    <div className="controls">
        <button className='play'>
        <PlayCircleOutline/> <span>Play</span>
        </button>
        <button className='arrow'>
        <PlayArrow/> <span>Trailer</span>
        </button>
       <button className='add'>
       <Add/>
       </button>
        <button className='group'>
        <GroupAddOutlined/>
        </button>
    </div>
    <div className="about">
        {movie?.about}
    </div>
    <div className="imdb">
     <span> IMDB Ratings :</span> 
    <h6> {movie?.imdb} / 100</h6>
    </div>
    <div className="tagline">
    <span>Tagline :</span>
    <h6> {movie?.tagLine}</h6>
    </div>
    <div className="desc">
       {movie?.desc}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default MovieInfo