import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
    hasErrors:false,
    endMovie:[]
}

const endMovieSlice = createSlice({
  name: 'endMovie',
  initialState,
  reducers: {
    getEndMovie:state =>{
        state.loading = true
    },
    getEndMovieSuccess :(state,action)=>{
        state.endMovie= action.payload
        state.loading=false
        state.hasErrors=false
    },
    getEndMovieFailure : state=>{
        state.loading =false
        state.hasErrors = false
    }
  }
});

export const {getEndMovie,getEndMovieFailure,getEndMovieSuccess} = endMovieSlice.actions
export const selectEndMovie = state=> state.endMovie
export default endMovieSlice.reducer