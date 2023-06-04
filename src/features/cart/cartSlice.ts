/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartService from './cartService'
import { errorMessage } from '../../utils/appUtils'

const initialState = {
  cart: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  error:null
}

export const getUserCart = createAsyncThunk(
  'cart/register',
  async (_data: any, thunkApi) => {
    try {
      return await cartService.getUserCart()
    } catch (error) {
      return thunkApi.rejectWithValue(errorMessage(error))
    }
  },
)


export const cartSlice = createSlice({
  name: 'cart',
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
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.cart = action.payload
      })
      .addCase(getUserCart.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.error = action.error
        state.cart = null
      })
  },
})

export const { reset } = cartSlice.actions
export default cartSlice.reducer
