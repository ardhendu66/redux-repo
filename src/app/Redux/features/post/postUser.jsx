import { useSelector } from "react-redux"
import { selectAllUsers } from "./userSlice"

export default ({userId}) => {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id === userId)

    return (
        <span> { 
            author 
                ? 
            author.email 
                :
            'Unknown email'
        }
        </span>
    )
}