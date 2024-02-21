import { configureStore } from "@reduxjs/toolkit"
import postReducer from "../features/post/postSlice"

export const postStore = configureStore({
    reducer: {
        posts: postReducer
    }
})