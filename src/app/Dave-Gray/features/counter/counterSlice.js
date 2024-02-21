import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: function(state) {
            state.value += 1
        },
        decrement: function(state) {
            state.value -= 1
        },
        incrementByAmount: function(state, action) {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer