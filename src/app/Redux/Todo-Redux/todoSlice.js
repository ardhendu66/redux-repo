import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Todo_1"
    }]
}

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: function(state, action) {
            state.todos.push({
                id: nanoid(),
                text: action.payload
            })
        },
        removeTodo: function(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: function(state, action) {
            state.todos = state.todos.map(todo => {
                if(todo.id === action.payload.id) {
                    todo.text = action.payload.text
                }
                return todo
            })
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export const todoReducer = todoSlice.reducer