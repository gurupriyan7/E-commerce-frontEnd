/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productService from './productService'
import { errorMessage } from '../../utils/appUtils'

const initialState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getProducts = createAsyncThunk(
  'auth/register',
  async (data: any, thunkApi) => {
    try {
      return await productService.getProducts()
    } catch (error) {
      return thunkApi.rejectWithValue(errorMessage(error))
    }
  },
)

export const productsSlice = createSlice({
  name: 'product',
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
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.products = action.payload
      })
      .addCase(getProducts.rejected, (state, action: any) => {
        state.isLoading = false
        state.isError = true
        state.isSuccess = false
        state.message = action.payload
        state.products = []
      })
  },
})

export const { reset } = productsSlice.actions
export default productsSlice.reducer
