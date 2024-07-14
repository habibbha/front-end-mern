import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const CreateOrder = createAsyncThunk("PostOrder", async (data,{rejectWithValue}) => {
 try{
 const res = await axios.post("/user/createorder",data,{
    headers:{
        token:localStorage.getItem("token")
    }
 });
  return res.data;
 }
 catch(error){
  rejectWithValue(error.response.data.msg)
 }
});


const OrderSlice = createSlice({
  name: "order",
  initialState: {
    isLoading: false,
    error: false,
    orders:[]

  },
  reducers:{
  },
  extraReducers:{
    [CreateOrder.pending]:(state)=>{state.isLoading=true},
    [CreateOrder.fulfilled]:(state)=>{
        state.error=null
        state.isLoading=false
       

    },
    [CreateOrder.rejected]:(state,action)=>{
        state.error=action.payload.error
       
    },
   
  }
});

export default OrderSlice.reducer;
// export const {logout}=UserSlice.actions
