import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    value: [{
        id: nanoid(),
        username: 'test01',
        email: 'test@email.com'
    }, {
        id: nanoid(),
        username: 'user@',
        email: 'user1@microsoftmail.com'
    }]
}

export const selectAllUsers = (state => state.users.value)

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: {
            reducer(state, action) {
                state.value.push(action.payload)
            },
            prepare(username, email) {
                return {
                    payload: {id: nanoid(), username, email}
                }
            }
        }
    }
})

export const { addUser } = userSlice.actions

export default userSlice.reducer