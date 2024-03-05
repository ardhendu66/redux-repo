import { useSelector, useDispatch } from "react-redux"
import { selectAllBlogs, getBlogsStatus, getBlogsError, fetchBlogs } from './blogSlice'
import { useEffect } from "react"
import ReactionButton from "./ReactionButton"

export default () => {
    const dispatch = useDispatch()

    const blogsList = useSelector(selectAllBlogs)
    const blogsStatus = useSelector(getBlogsStatus)
    const blogsError = useSelector(getBlogsError)

    useEffect(() => {
        if(blogsStatus == 'idle') {
            dispatch(fetchBlogs())
        }
    }, [dispatch, blogsStatus])

    let displayBlogs
    if(blogsStatus === 'pending') {
        displayBlogs = <h3>loading...</h3>
    }
    else if(blogsStatus === 'failed') {
        displayBlogs = <h3>{blogsError}</h3>
    }
    else if(blogsStatus === 'success') {
        displayBlogs = <div> 
            {
                blogsList[0].map(blog => 
                    <div key={blog.id} style={{border: '2px solid black', margin: 20, padding: 10}}>
                        <h4>
                            blog: {blog.id}
                        </h4>
                        <h3>
                            {blog.title}
                        </h3>
                        <p>
                            {blog.body}
                        </p>
                        <h5>
                            {blog.date}
                        </h5>
                        <ReactionButton blog={blog} />
                    </div>
                )
            }
        </div>
    }

    return (
        <>
            {displayBlogs}
        </>
    )
}