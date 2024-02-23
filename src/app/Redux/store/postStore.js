import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../features/post/postSlice"
import userReducer from '../features/post/userSlice'

export const postStore = configureStore({
    reducer: {
        posts: postReducer, 
        users: userReducer
    }
})