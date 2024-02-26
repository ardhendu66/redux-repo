import { useDispatch } from "react-redux"
import { reactionsAdded } from "./blogSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '🍵'
}

export default ({blog}) => {
    const dispatch = useDispatch()

    return (
        <div> 
        {
            Object.entries(reactionEmoji).map(([name, emoji]) => 
                <button
                    key={name}
                    type="button"
                    onClick={() => 
                        dispatch(reactionsAdded({blogId: blog.id, reaction: name}))
                    }
                    style={{
                        width: 45,
                        height: 45,
                        border: '1px solid black',
                        borderRadius: '50%',
                        padding: '0px 1px',
                        margin: 5,
                    }}
                > 
                    {emoji}&nbsp;&nbsp; 
                    {blog.reactions[name]} 
                </button>
            )
        }
        </div>
    )
}