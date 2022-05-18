import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import { fetchFirebaseWatchMovie } from "../features/api/movieDataApi";
import { selectMovieRoute } from "../features/movieRouteSlice";
import AvengerItem from "./AvengerItem";
import './component.css'
function Avenger() {
   
    const dispatch = useDispatch()
    const {movieRoute , loading , hasError} = useSelector(selectMovieRoute)
    useEffect(()=>{
       dispatch(fetchFirebaseWatchMovie())
    },[dispatch])
    //  console.log('firebae', movieRoute)

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  var setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const images = [
    "https://www.kindpng.com/picc/m/29-298347_avengers-hd-png-download.png",
    "https://wallpaperaccess.com/full/13453.jpg",
    "https://wallpaperaccess.com/full/13456.jpg",
    "https://www.teahub.io/photos/full/206-2069185_data-src-avengers-desktop-wallpaper-for-lockscreen-avengers.jpg",
    "https://img.8wallpapers.com/uploads/2019/05/8560f8b153ff462fb688cce3.jpg",
    "https://wallpaperaccess.com/full/13466.png",
  ];
  return (
    <>
      <Slider {...settings} className="slider">
        {images.map((image, i) => (
          <img src={image} alt="dkk" className="banner-imgs" key={i} />
        ))}
      </Slider>
      <h4 className="trend-h4">Trendings in 2022 for you</h4>
      <Slider {...setting} >
              {movieRoute && movieRoute.map((item,i)=>(
            loading ?
            <p>Loading wait</p> :(
            <div className="aveng-wrap" key={i}>
             <img src={item.postUrl} alt={item.title} className='aveng-img'/>
             </div>
            )
          
        ))}
      </Slider>
      <AvengerItem />
    </>
  );
}

export default Avenger;
