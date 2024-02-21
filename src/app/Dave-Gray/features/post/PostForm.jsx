import { useState } from "react"
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"
import { postAdded } from "./postSlice"

export default () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const onSavePostClicked = (event) => {
        event.preventDefault()
        if(title && content) {
            dispatch(postAdded({
                id: nanoid(),
                title: title,
                content: content
            }))
            setTitle('')
            setContent('')
        }
    }

    return (
        <center>
            <section>
                <h2>Add a new Post</h2>
                <form>
                    <input 
                        type="text"
                        value={title}
                        placeholder="Post-Title"
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    <br />
                    <input 
                        type="text"
                        value={content}
                        placeholder="Post-Content"
                        onChange={(event) => setContent(event.target.value)}
                    />
                    <br />
                    <button onClick={onSavePostClicked}>Save Post</button>
                </form>
            </section>
        </center>
    )
}