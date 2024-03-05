import { useSelector, useDispatch } from "react-redux"
import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postSlice"
import { fetchUsers, selectAllUsers, selectUsersStatus } from "./userSlice"
import TimeAgo from "./TimeAgo"
import { useEffect } from "react"

export default () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const postStatus = useSelector(getPostStatus)
    const postError = useSelector(getPostError)
    const users = useSelector(selectAllUsers)
    const userStatus = useSelector(selectUsersStatus)

    useEffect(() => {
        if(postStatus === 'idle') {
            dispatch(fetchPosts())
        }
    }, [postStatus, dispatch])

    useEffect(() => {
        if(userStatus === 'idle') {
            dispatch(fetchUsers())
        }
    }, [dispatch, userStatus])

    let content
    if(postStatus === 'loading') {
        content = <h3>loading...</h3>
    }
    else if(postStatus === 'succeeded') {
        content = posts[0].map(post => 
            <div 
                key={post.id} 
                style={{border: '2px solid black', margin: 20, padding: 10}}
            >
                <h3>{post.title}</h3>
                <div>{post.body.substring(0, 100)}</div>
                <h5> <TimeAgo timeStamp={post.date} /> </h5>
            </div>
        )
    }
    else if(postStatus === 'failed') {
        content = <h3>{postError}</h3>
    }

    let userContent
    if(userStatus === 'succeeded') {
        userContent = users[0].map(user => 
            <div 
                key={user.id} 
                style={{border: '2px solid black', margin: 20, padding: 10}}
            >
                <h3>{user.name}</h3>
                <div>{user.email}</div>
            </div>
        )
    }

    return (
        <div>
            {content}
            {userContent}
        </div>
    )
}