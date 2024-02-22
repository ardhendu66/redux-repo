import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { postAdded } from "./postSlice"
import { selectAllUsers } from "./userSlice"

export default () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('')

    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)

    const onSavePostClicked = (event) => {
        event.preventDefault()
        if(title && content) {
            dispatch(postAdded(title, content, userId))
            setTitle('')
            setContent('')
        }
    }

    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

    const userOptions = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.email}
        </option>
    ))

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
                    <select value={userId} onChange={event => setUserId(event.target.value)}>
                        <option>select</option>
                        {userOptions}
                    </select>
                    <br />
                    <button onClick={onSavePostClicked} style={{width: '14%'}}>Save Post</button>
                </form>
            </section>
        </center>
    )
}