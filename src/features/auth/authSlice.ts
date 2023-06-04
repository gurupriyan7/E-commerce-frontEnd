/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'
import { RegisterFormData } from '../../pages/register/register.interface'

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
      const message =
        error?.response?.data?.message || error?.message || error.toString()

      return thunkApi.rejectWithValue(message)
    }
  },
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
  },
})

export const { reset } = authSlice.actions
export default authSlice.reducer
