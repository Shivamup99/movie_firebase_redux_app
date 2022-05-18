import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   loading:false,
   hasErrors:false,
   movieData:[]
}

const movieDataSlice = createSlice({
  name: 'movieData',
  initialState,
  reducers: {
      getMovieData:state =>{
          state.loading = true
      },
      getMovieDataSuccess :(state,action)=>{
          state.movieData= action.payload
          state.loading=false
          state.hasErrors=false
      },
      getMovieDataFailure : state=>{
          state.loading =false
          state.hasErrors = false
      }
  }
});

export const {getMovieData,getMovieDataSuccess,getMovieDataFailure} = movieDataSlice.actions
export const selectMovieData = state=>state.movieData
export default movieDataSlice.reducer