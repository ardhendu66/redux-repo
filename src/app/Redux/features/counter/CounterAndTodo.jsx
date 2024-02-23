import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "./counterSlice"
import { changeTodo } from "./todoSlice"

export default () => {
    const counter = useSelector(state => state.counter.value)
    const todos = useSelector(state => state.todos.value)
    const dispatch = useDispatch()

    return (
        <>
            <div>
                <button onClick={() => dispatch(increment())}>Increment {counter}</button>
                <button onClick={() => dispatch(decrement())}>Decrement {counter}</button>
                <button onClick={() => dispatch(incrementByAmount(5))}>Increment By Amount</button>
            </div>
            <div>
                <h3>{todos[0].title}</h3>
                <h3>{todos[0].description}</h3>
                <button onClick={() => dispatch(changeTodo())}>ChangeTodo</button>
            </div>
        </>
    )
}