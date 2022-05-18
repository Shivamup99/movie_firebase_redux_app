import { getMovieData, getMovieDataFailure, getMovieDataSuccess } from "../movieDataSlice";
import db from '../../firebase'
import { getMovieRoute, getMovieRouteSuccess ,getMovieRouteFailure } from "../movieRouteSlice";

export function fetchMovieData(){
    return async dispatch => {
        dispatch(getMovieData())
        try {
            const response = await fetch('http://www.omdbapi.com/?s=star&apikey=d2671c69')
            const data = await response.json()
      
            dispatch(getMovieDataSuccess(data.Search))
          } catch (error) {
            dispatch(getMovieDataFailure())
          }
        }
} 

export function fetchAvengers(){
    return async dispatch => {
        dispatch(getMovieData())
        try {
            const response = await fetch('http://www.omdbapi.com/?s=avenger&apikey=d2671c69')
            const data = await response.json()
      
            dispatch(getMovieDataSuccess(data.Search))
          } catch (error) {
            dispatch(getMovieDataFailure())
          }
        }
} 

export function fetchEndMovies(){
  return async dispatch => {
      dispatch(getMovieData())
      try {
          const response = await fetch('http://www.omdbapi.com/?s=end&apikey=d2671c69')
          const data = await response.json()
    
          dispatch(getMovieDataSuccess(data.Search))
        } catch (error) {
          dispatch(getMovieDataFailure())
        }
      }
} 

export function fetchFirebaseWatchMovie(){
    return dispatch =>{
        dispatch(getMovieRoute())
        try {
            db.collection('watchmovie').onSnapshot((snapshot)=>{
                let response = snapshot.docs.map((doc)=>{
                    return {id:doc.id, ...doc.data()}
                })
               dispatch(getMovieRouteSuccess(response))
            })
        } catch (error) {
           dispatch(getMovieRouteFailure())
        }
    }
}