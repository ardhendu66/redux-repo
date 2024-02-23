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

    const reactionButton = Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
            key={name}
            type="button"
            onClick={() => 
                dispatch(reactionsAdded({postId: post.id, reaction: name}))
            }
        >
            {emoji}&nbsp;&nbsp; {post.reactions[name]}
        </button>
    ))

    return (
        <>
            {reactionButton}
        </>
    )
}