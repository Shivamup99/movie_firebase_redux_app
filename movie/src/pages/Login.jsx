import React from 'react'
import { useNavigate } from 'react-router-dom'
import {auth ,provider} from '../firebase'
import { useDispatch} from 'react-redux'
import { setLogin } from '../features/authSlice'
function Login() {
  const dispatch = useDispatch()
    const navigate = useNavigate() 
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
  return (
    <div className='login'>
        <div className="img-wraps">
            <img className='img-login' src='https://disneyexaminer.com/wp-content/uploads/2020/03/disney-hulu-espn-logo.png' alt='dddd' />
            <button className='login-btn' onClick={signIn}>GET ALL MOVIES THERE</button>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste perferendis assumenda fugiat eaque ad ducimus laudantium quae fugit nemo accusantium sapiente minima sequi aliquid ab quia, molestias voluptatum natus ut!</p>
        </div>
    </div>
  )
}

export default Login