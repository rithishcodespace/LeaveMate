import { createSlice } from "@reduxjs/toolkit";

const persistedState = JSON.parse(localStorage.getItem("authState")) || {
    loggedIn:false,
    role:null
}

const loggedinslice = createSlice({
    name:"loggedinslice",
    initialState:persistedState,
    reducers:{
        login:(state,action)=>{
            state.loggedIn = true,
            state.role = action.payload,
            localStorage.setItem("authState",JSON.stringify(state))
        },
        logout:(state,action)=>{
            state.loggedIn=false,
            state.role=null,
            localStorage.removeItem("authState");
        }
    }
})

export const{login,logout} = loggedinslice.actions;
export default loggedinslice.reducer;