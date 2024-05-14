import './post.css'
import { MoreVert } from '@mui/icons-material'
export default function Post() {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="src\assets\person\1.jpeg" alt=""  className='postProfileImg'/>
                    <span className="postUsername">rosy Lamao </span>
                    <span className='postDate'>5 Min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
                <div className="postCenter">
                    <span className="postText">Hey it's my first post :) </span>
                    <img src="src\assets\post\1.jpeg" alt="" className="postImg" />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="src\assets\like.png" alt=""  className='likeIcon'/>
                        <img src="src\assets\heart.png" alt="" className='likeIcon'/>
                    <span className="postLikeCounter">33 people like</span>

                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
        </div>
    </div>
  )
}
