import './style.scss';
import '../../../style/font.css';
import { AddComment } from '../AddComment/AddComment';
import { Comment } from '../Comment/Comment';
import { FaRegCommentDots } from "react-icons/fa";
import { useState } from 'react';
import { FetchPostComments } from '../../../hooks/API/FetchPostComments';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

type CommentsSectionProps = {
   postId: number
};

export const CommentsSection = (props: CommentsSectionProps) => {
   const [showMore, setShowMore] = useState(false);

   const { comments } = FetchPostComments(props.postId);

   return (
      <div className='comments-section'>
         <div className={`actionPartOfPost ${showMore ? 'showComments' : 'stoppedShowing'}`}>
            <AddComment />
            {
               comments[0] ? (
                  comments.map((comment: any) => {
                     return <Comment key={comment.id} comment={comment} postId={props.postId}/>
                  })
               ) : (
                  <LoadingScreen />
               )

            }
         </div>

         <div className='closeComments' onClick={() => { setShowMore(!showMore) }}>
            {showMore ? <FaRegCommentDots className='iconComment' /> : <FaRegCommentDots className='iconComment' />}
         </div>
      </div>
   )
}