import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./color/colorSlice"
import countReducer from "../Redux/count/countSlice"

export default configureStore({
    reducer:{
        color:colorReducer,
        count:countReducer
    }
})

