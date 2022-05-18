import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    hasErrors:false,
    movieRoute:[]
}

const movieRouteSlice = createSlice({
  name: 'movieRoute',
  initialState,
  reducers: {
    getMovieRoute:state =>{
        state.loading = true
    },
    getMovieRouteSuccess :(state,action)=>{
        state.movieRoute= action.payload
        state.loading=false
        state.hasErrors=false
    },
    getMovieRouteFailure : state=>{
        state.loading =false
        state.hasErrors = false
    }
  }
});

export const {getMovieRoute , getMovieRouteFailure , getMovieRouteSuccess} = movieRouteSlice.actions
export const selectMovieRoute = state => state.movieRoute
export default movieRouteSlice.reducer