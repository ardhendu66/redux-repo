import { useSelector, useDispatch } from "react-redux"
import { removeTodo, updateTodo } from "./todoSlice"
import { useState } from "react"

export default () => {
    const todos = useSelector(state => Array(state.todos))
    const dispatch = useDispatch()
    const [input, setInput] = useState(null)

    return (
        <>
            {
                todos.map(todo => <div key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>delete</button>
                        <input 
                            type="text"
                            placeholder="update text"
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <button onClick={(event) => {
                            event.preventDefault()
                            dispatch(updateTodo({id: todo.id, text: input}))
                            setInput("")
                        }}>Update</button>
                    </div>
                )
            }
        </>
    )
}