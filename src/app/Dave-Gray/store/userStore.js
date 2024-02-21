import { configureStore } from "@reduxjs/toolkit"
import userReducer from '../features/user/userSlice'

export const userStore = configureStore({
    reducer: {
        users: userReducer
    }
})