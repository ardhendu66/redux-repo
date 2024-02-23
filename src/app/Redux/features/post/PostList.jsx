import PostUser from "./postUser"
import { useSelector } from "react-redux"
import { selectAllPosts } from "./postSlice"
import TimeAgo from "./TimeAgo"
import ReactionButtton from "./ReactionButtton"

export default () => {
    const posts = useSelector(selectAllPosts)

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-around'}}>
            {
                orderedPosts.map(post => {
                    return (
                        <div key={post.id} style={{border: '2px solid black', margin: 20, padding: 10}}>
                            <h3>{post.title}</h3>
                            <div>{post.content}</div>
                            <h5>
                                <PostUser userId={post.userId} />
                                <TimeAgo timeStamp={post.date} />
                            </h5>
                            <ReactionButtton post={post} />
                        </div>
                    )
                })
            }
        </div>
    )
}