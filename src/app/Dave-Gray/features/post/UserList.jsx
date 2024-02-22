import { useSelector } from "react-redux"
import { selectAllUsers } from './userSlice'

export default () => {
  const users = useSelector(selectAllUsers)

  return (
    <center>
      {
        users.map(user => <div key={user.id}>
            <h5>{user.username}</h5>
            <div>{user.email}</div>
          </div>
        )
      }
    </center>
  )
}