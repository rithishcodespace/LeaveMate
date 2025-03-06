import {configureStore} from "@reduxjs/toolkit";
import loggedinslicereducer from "./loggedinslice";

const store = configureStore({
    reducer:{
      loggedinslice:loggedinslicereducer,
    }
})

export default store;