import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { PostType } from '../../../types/PostType';
import { FetchPostWithUserData } from '../../../hooks/API/FetchPostWithUserData';
import { Comment } from '../Comment/Comment';
import { AddComment } from '../AddComment/AddComment';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegCommentDots } from "react-icons/fa";




type PostProps = {
   post: PostType,
};


export const Post = (props: PostProps) => {
   const navigate = useNavigate();

   const { user } = FetchPostWithUserData(props.post.userId.toString());
   const [showMore, setShowMore] = useState(false);

   const handleNavigateToUserPage = (userId: number) => {
      document.body.classList.remove('freeze-scrolling');
      navigate(`/user/${userId}/posts`);
   }

   return (
      <div className='postsPage'>
         <div className='somePost'>
            <div className='topPartOfPost'>
               <div className='userPost' onClick={() => handleNavigateToUserPage(user.id)}>
                  <div>
                     <img src={profilePicture} alt="profilePicture" className='profilePicture' />
                  </div>
                  <div className='userPostUsername'>
                     {user.username}
                  </div>
               </div>

            </div>
            <div className='bottomPartOfPost'>
               <div className='postDescription'>
                  <div className='postTitle'>
                     {props.post.title}
                  </div>
                  <div className='postText'>
                     {props.post.body}
                  </div>
               </div>
            </div>

            <div className={`actionPartOfPost ${showMore ? 'showComments' : 'stoppedShowing'}`}>
               <AddComment />
               <Comment />
               <Comment />
               <Comment />
            </div>

            <div className='closeComments' onClick={() => { setShowMore(!showMore) }}>
               {showMore ? <FaRegCommentDots className='iconComment' /> : <FaRegCommentDots className='iconComment' />}
            </div>

         </div>
      </div>
   )
}