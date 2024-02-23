import PostUser from "./postUser"
import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import TimeAgo from "./TimeAgo"

export default () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <center>
            {
                orderedPosts.map(post => {
                    return (
                        <div key={post.id} style={{border: '2px solid black', margin: 20}}>
                            <h3>{post.title}</h3>
                            <div>{post.content}</div>
                            <h4>
                                <PostUser userId={post.userId} />
                                <TimeAgo timeStamp={post.date} />
                            </h4>
                        </div>
                    )
                })
            }
        </center>
    )
}