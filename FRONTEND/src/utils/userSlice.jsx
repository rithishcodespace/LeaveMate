import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:"userSlice",
    initialState:{
        name:null,
        emailId:null,
    },
    reducers:{
        addusers:(state,action)=>{
            state.name = action.payload.name;
            state.emailId = action.payload.emailId;
        }
    }
})

export const{addusers} = userSlice.actions;
export default userSlice.reducer;