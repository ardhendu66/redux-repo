import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { sub } from "date-fns"

const postsUrl = `https://jsonplaceholder.typicode.com/posts`

const initialState = {
    value: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    try {
        const res = await axios.get(postsUrl)
        // console.log(res.data)
        return res.data   // [...res.data]
    }
    catch(err) {
        return err.message
    }
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.status = 'succeeded'
            let min = 1
            const loadedPosts = action.payload.map(post => 
                post.date = sub(new Date(), {minutes: min++}).toISOString()
            )
            state.value.push(action.payload)
            state.value = state.value.concat(loadedPosts)
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.error.message
        })
    }
})

export const selectAllPosts = state => state.posts.value
export const getPostStatus = state => state.posts.status
export const getPostError = state => state.posts.error

export const { postAdded } = postSlice.actions

export default postSlice.reducer