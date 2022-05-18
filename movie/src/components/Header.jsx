import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import {auth ,provider} from '../firebase'
import './component.css'
import {CropOriginal, Home, Movie, Search, StarBorder, Watch} from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserName, selectUserPhoto, setLogin, setLogout } from '../features/authSlice'

function Header() {
    const dispatch = useDispatch()
    const navigate = useNavigate() 
    const userName = useSelector(selectUserName)
    const userPhoto = useSelector(selectUserPhoto)
    //for refreshing page user always logind
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                dispatch(setLogin({
                 name:user.displayName,
                 email:user.email,
                 photo:user.photoURL 
                }))
            }
        })
    },[])
    const signIn =()=>{
        auth.signInWithPopup(provider).then((result)=>{
            let user = result.user
             dispatch(setLogin({
                 name:user.displayName,
                 email:user.email,
                 photo:user.photoURL
             }))
             navigate('/')
        },[])
    }
    const signOut = ()=>{
        auth.signOut().then(()=>{
            dispatch(setLogout());
            navigate('/login')
        })
    }
  return (
    <div className='nav'>
        <h1 className='nav-logo'>
          <Link to='/'> T-MOVIE</Link> </h1>
          {!userName ? 
          <div className="button-log">
            <button onClick={signIn} className='nav-login-button'>Login</button>
          </div>
          :(
              <>
                <div className="nav-data">
        <NavLink to='/'  className='nav-link'>
            <Home />
            <span>home</span>
        </NavLink>
        <NavLink to='#' className='nav-link'>
            <Search />
            <span>search</span>
        </NavLink>
        <NavLink to='/watch/list' className='nav-link'>
            <Watch />
            <span>Watchlist</span>
        </NavLink>
        <NavLink to='/movies' className='nav-link'>
            <Movie />
            <span>movie</span>
        </NavLink>
        <NavLink to='#' className='nav-link'>
            <CropOriginal />
            <span>Series</span>
        </NavLink>
        <NavLink to='#' className='nav-link'>
            <StarBorder />
            <span>originals</span>
        </NavLink>
        </div>
        <Avatar src={userPhoto} className='avatar' onClick={signOut} />
              </>
          ) }
       
    </div>
  )
}

export default Header