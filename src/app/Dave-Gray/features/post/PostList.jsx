import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts } from "./postSlice"

export default () => {
    const posts = useSelector(selectAllPosts)

    return (
        <center>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <h5>{post.title}</h5>
                            <div>{post.content}</div>
                        </div>
                    )
                })
            }
        </center>
    )
}