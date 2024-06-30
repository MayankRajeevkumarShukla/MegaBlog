import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    status:false,
    allPost:null,
}

const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
         allPost:(state,action)=>{
             state.status = true;
             state.allPost = action.payload.allPost
         }
    }
})
export const { allPost } = postSlice.actions;
export default postSlice.reducer