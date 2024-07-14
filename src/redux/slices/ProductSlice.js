import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const GetProducts = createAsyncThunk("Products/getProducts", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get("/user/getproduct");
    return res.data;
  } catch (error) {
    return rejectWithValue(error.response.data.msg);
  }
});

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    isLoading: false,
    error: null,
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(GetProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload.products;
      })
      .addCase(GetProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default ProductSlice.reducer;
