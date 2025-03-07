import {configureStore} from "@reduxjs/toolkit";
import loggedinslicereducer from "./loggedinslice";
import userreducer from "./userSlice";

const store = configureStore({
    reducer:{
      loggedinslice:loggedinslicereducer,
      userSlice:userreducer
    }
})

export default store;