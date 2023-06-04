/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { RegisterFormData } from '../../pages/register/register.interface'
import { errorMessage } from '../../utils/appUtils'

const user =  localStorage.getItem('user') 

const initialState = {
  user: user ? JSON.parse(user) : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const register = createAsyncThunk(
  'auth/register',
  async (user: RegisterFormData, thunkApi) => {
    try {
      return await authService.register(user)
    } catch (error:any) {
      return thunkApi.rejectWithValue(errorMessage(error))
    }
  },
)

export const login = createAsyncThunk(
  "auth/login",
  async (data:any,thunkApi)=>{
    try {
      return await authService.login(data)
    } catch (error) {
      return thunkApi.rejectWithValue(errorMessage(error))
    }
  }
)

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state: any) => {
      ;(state.isError = false),
        (state.isSuccess = false),
        (state.isLoading = false),
        (state.message = '')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.user = null
      })
 
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
