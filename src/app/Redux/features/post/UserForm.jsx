import { useState } from "react"
import { useDispatch } from "react-redux"
import { addUser } from './userSlice'

export default () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()

    const onSaveUserClicked = (event) => {
        event.preventDefault()
        if(username && email) {
            dispatch(addUser(username, email))
            setUsername('')
            setEmail('')
        }
    }

    return (
        <center>
            <section>
                <h2>Add a new User</h2>
                <form>
                    <input 
                        type="text"
                        value={username}
                        placeholder="User-username"
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    <br />
                    <input 
                        type="text"
                        value={email}
                        placeholder="User-email"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <br />
                    <button onClick={onSaveUserClicked}>Save User</button>
                </form>
            </section>
        </center>
    )
}