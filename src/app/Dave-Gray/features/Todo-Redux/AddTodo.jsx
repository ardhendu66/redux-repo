import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "./todoSlice"

export default () => {
    const [input, setInput] = useState(null)
    const dispatch = useDispatch()

    const addTodoHandler = (event) => {
        event.preventDefault()
        dispatch(addTodo(input))
        setInput("")
    }

    return (
        <form onSubmit={addTodoHandler}>
            <input 
                type="text"
                placeholder="Enter a Todo"
                onChange={(event) => setInput(event.target.value)}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}