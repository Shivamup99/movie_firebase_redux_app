import React, { useEffect, useState } from 'react'
import {Add, GroupAddOutlined, PlayArrow, PlayCircleOutline} from '@material-ui/icons'
import {useNavigate, useParams} from 'react-router-dom'
import db from '../firebase'
import Footer from '../components/Footer'
function Details() {
    const [movie,setMovie] = useState()
    const {id} = useParams()
    const navigate = useNavigate()
    useEffect(()=>{
        db.collection('movies').doc(id).get().then((doc)=>{
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
        <img src={movie?.backgroundImg} alt='vold' />
    </div>
    <div className="img-title">
        <img src={movie?.titleImg ? movie?.titleImg:movie?.title} alt='xddd'/>
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
        {movie?.subTitle}
    </div>
    <div className="desc">
       {movie?.description}
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default Details