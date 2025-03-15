import { createSlice } from "@reduxjs/toolkit";

let leavebalance = createSlice({
    name:"leavebalance",
    initialState:{
        acceptedleaves:0
    },
    reducers:{
        addacceptedleaves:(state,action)=>{
            state.acceptedleaves = action.payload;
        }
    }
})

export const {addacceptedleaves} = leavebalance.actions;
export default leavebalance.reducer;