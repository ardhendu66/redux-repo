import { useDispatch } from "react-redux"
import { reactionsAdded } from "./postSlice"

const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤️',
    rocket: '🚀',
    coffee: '🍵'
}

export default ({post}) => {
    const dispatch = useDispatch()

    return (
        <div style={{display: "flex", justifyContent: "space-between"}}> {
            Object.entries(reactionEmoji).map(([name, emoji]) => <button
                    key={name}
                    type="button"
                    onClick={() => 
                        dispatch(reactionsAdded({postId: post.id, reaction: name}))
                    }
                    style={{
                        width: 45,
                        height: 45,
                        border: '1px solid black',
                        borderRadius: '50%',
                        padding: '0px 1px',
                    }}
                > {emoji}&nbsp;&nbsp; {post.reactions[name]} </button>
            )}
        </div>
    )
}