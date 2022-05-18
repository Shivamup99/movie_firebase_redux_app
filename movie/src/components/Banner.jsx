import React from 'react'
import Slider from "react-slick";
function Banner() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
         autoplay:true,
        autoplaySpeed:2000
      };
      const images =[
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1495/1191495-h-a8c232a67890',
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5497/1175497-h-296b8ac63217',
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5210/1165210-h-a72a0a95461e',
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1511/1161511-h-a103f5d4c916',
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1341/1091341-h-0c4699c4630e',
          'https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/7981/1237981-h-032220ccd439',
          
      ]
  return (
    <Slider {...settings} className='slider'>
  
       {images.map((image,i)=>(
          <img src={image} alt='dkk' className='banner-img' key={i}/>
       ))} 
    
    </Slider>
  )
}

export default Banner