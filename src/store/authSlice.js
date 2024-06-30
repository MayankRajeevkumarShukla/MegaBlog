import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{ 
       login:(state,action)=>{
          state.status = true;
          state.userData=action.payload.userData;
       },
       logout:(state,action)=>{
          state.status=false;
          state.userData=null;
       }

    }
})
// reducer kae andar jo bhi function hai usko aise export karte hai
export const {login, logout} = authSlice.actions;
// yeh toh reducer ko export kiya hai
export default authSlice.reducer;