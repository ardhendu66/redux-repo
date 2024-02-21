import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: [{
        id: 1,
        title: "Attend Classes",
        description: "Go to class 9:00 am today"
    }]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        changeTodo: function(state) {
            const [object] = state.value
            object.description = "Attend lecture today at 9:15 am at Banquet Hall"
        }
    }
})

export const { changeTodo } = todoSlice.actions

export default todoSlice.reducer