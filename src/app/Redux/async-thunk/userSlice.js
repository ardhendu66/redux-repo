import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const usersUrl = `https://jsonplaceholder.typicode.com/users`

const initialState = {
    value: [],
    status: 'idle',
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    try {
        const res = await axios.get(usersUrl)
        return res.data
    }
    catch(err) {
        return err.message
    }
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.value.push(action.payload)
        })
    }
})

export const selectAllUsers = state => state.users.value
export const selectUsersStatus = state => state.users.status

export default userSlice.reducer