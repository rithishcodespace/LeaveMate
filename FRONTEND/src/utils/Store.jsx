import {configureStore} from "@reduxjs/toolkit";
import loggedinslicereducer from "./loggedinslice";
import userreducer from "./userSlice";
import leavebalancereducer from "./leavebalance"

const store = configureStore({
    reducer:{
      loggedinslice:loggedinslicereducer,
      userSlice:userreducer,
      leavebalance:leavebalancereducer,
    }
})

export default store;