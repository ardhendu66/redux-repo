import { createSlice, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"

const initialState = {
    value: [{
        id: "1",
        title: "Learning Redux Toolkit",
        content: `Redux toolkit was introduced by Facebook.inc`,
        date: sub(new Date(), {minutes: 10}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }, {
        id: "2",
        title: "Pizza Slices are delicious",
        content: "The more I say slice, the more I want pizza.",
        date: sub(new Date(), {minutes: 5}).toISOString(),
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    }]
}

export const selectAllPosts = (state => state.posts.value)

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer: function(state, action) {
                state.value.push(action.payload)
            },
            prepare: function(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, content, userId,
                        date: new Date().toISOString(),
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        }
                    }
                }
            }
        },
        reactionsAdded: function(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.value.find(post => post.id === postId)
            if(existingPost) {
                existingPost.reactions[reaction]++
            }
        } 
    }
})

export const { postAdded, reactionsAdded } = postSlice.actions 

export default postSlice.reducer