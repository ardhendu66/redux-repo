import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../features/async-thunk/postSlice"
import userReducer from "../features/async-thunk/userSlice"

export const store = configureStore({
    reducer: {
        posts: postReducer,
        users: userReducer,
    }
})