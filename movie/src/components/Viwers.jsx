import React from 'react'
import {Link} from 'react-router-dom'
function Viwers() {
  return (
    <div className='viwers'>
         <div className='wrap-img'>
           <Link to='/star-wars'>
           <img src='/images/l2.png' alt='dhdh' className='img-wrap'/>
           </Link>
         </div>
         <div className='wrap-img'>
           <Link to='/marvel/studio'>
           <img src='/images/l6.png' alt='dhdh' className='img-wrap'/>
           </Link>
         </div>
         <div className='wrap-img'>
            <img src='/images/l5.jpg' alt='dhdh' className='img-wrap'/>
         </div>
         <div className='wrap-img'>
            <img src='/images/l4.jpg' alt='dhdh' className='img-wrap'/>
         </div>
         <div className='wrap-img'>
            <img src='/images/l8.png' alt='dhdh' className='img-wrap'/>
         </div>
    </div>
  )
}

export default Viwers