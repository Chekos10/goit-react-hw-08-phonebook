import { createSlice } from '@reduxjs/toolkit';
import { loginUserThunk, logoutUserThunk, refreshUserThunk, registerUserThunk } from './operations';

const initialState = {
  isLoading:false,
  error: null,
  userData: null,
  authentificated: false,
  token: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState, 

  extraReducers: builder =>
    builder
    .addCase(registerUserThunk.pending, state =>{
      state.isLoading = true;
      state.error = null; 
    })
    .addCase(registerUserThunk.fulfilled, (state,action) =>{
      state.isLoading = false;
      state.authentificated = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(registerUserThunk.rejected, (state,action) =>{
      state.isLoading = false;
      state.error = action.payload; 
    })

    //Login//

    .addCase(loginUserThunk.pending, state =>{
      state.isLoading = true;
      state.error = null; 
    })
    .addCase(loginUserThunk.fulfilled, (state,action) =>{
      state.isLoading = false;
      state.authentificated = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(loginUserThunk.rejected, (state,action) =>{
      state.isLoading = false;
      state.error = action.payload; 
    })
    //refresh//
    .addCase(refreshUserThunk.pending, (state) =>{
      state.isLoading = true;
      state.error = null; 
    })
    .addCase(refreshUserThunk.fulfilled, (state,action) =>{
      state.isLoading = false;
      state.authentificated = true;
      state.userData = action.payload;
    })
    .addCase(refreshUserThunk.rejected, (state,action) =>{
      state.isLoading = false;
      state.error = action.payload; 
    })
    //logout//
    .addCase(logoutUserThunk.pending, state =>{
      state.isLoading = true;
      state.error = null; 
    })
    .addCase(logoutUserThunk.fulfilled, (state, action) =>{
      state.isLoading = false;
      state.authentificated = false;
      state.userData = null;
      state.token = null;
    })
    .addCase(logoutUserThunk.rejected, (state,action) =>{
      state.isLoading = false;
      state.error = action.payload; 
    })

});


export const authReducer = authSlice.reducer;
