import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [{
            id: "1",
            title: "Learning Redux Toolkit",
            content: `I've heard good thing`
        }, {
            id: "2",
            title: "Slices...",
            content: "The more I say slice, the more I want pizza."
        }]
}

export const selectAllPosts = (state => state.posts.value)

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: function(state, action) {
            state.value.push(action.payload)
        }
    }
})

export const { postAdded } = postSlice.actions 

export default postSlice.reducer