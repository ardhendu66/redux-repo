import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit"
import { sub } from "date-fns"
import axios from "axios"

const initialState = {
    value: [],
    status: 'idle',
    error: null,
}

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=7')
        const response = res.data.map(object => {
            object.date = new Date().toUTCString(),
            object.reactions = {
                thumbsUp: 0,
                wow: 0,
                heart: 0,
                rocket: 0,
                coffee: 0
            }
            return object
        })
        console.log('response: ', response)
        return response
    }
    catch(err) {
        return err.message
    }
})

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.value.push(action.payload)
            },
            prepare(title, body, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title, body, userId,
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
        reactionsAdded(state, action) {
            const { blogId, reaction } = action.payload
            console.log(blogId, reaction)
            const existingBlog = state.value.find(blog => blog.id === blogId)
            if(existingBlog) {
                existingBlog.reactions[reaction]++
            }
            // existingBlog.reactions[reaction]
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchBlogs.pending, (state, action) => {
            state.status = "pending"
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
            state.status = "success"
            state.value.push(action.payload)
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
            state.status = "failed",
            state.error = action.error.message
        })
    }
})

export const { blogAdded, reactionsAdded } = blogSlice.actions

export const selectAllBlogs = state => state.blogs.value
export const getBlogsStatus = state => state.blogs.status
export const getBlogsError = state => state.blogs.error

// export const selectBlogsById = (state, blogId) => state.blogs.value.find(
//     blog => blog.id === blogId
// )

export default blogSlice.reducer