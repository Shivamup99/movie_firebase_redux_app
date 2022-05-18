import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'',
    email:'',
    photo:''
}

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
      setLogin: (state,action)=>{
         state.name = action.payload.name
         state.email = action.payload.email
         state.photo = action.payload.photo
      },
      setLogout:(state)=>{
          state.name = null
          state.email = null
          state.photo = null
      }
  }
});

export const {setLogin,setLogout} = authSlice.actions
export const selectUserName = (state)=>state.user.name
export const selectUserEmail = (state)=>state.user.email
export const selectUserPhoto = (state)=>state.user.photo
export default authSlice.reducer