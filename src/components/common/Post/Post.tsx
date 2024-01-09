import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { PostType } from '../../../types/PostType';
import { FetchPostWithUserData } from '../../../hooks/API/FetchPostWithUserData';
import { useNavigate } from 'react-router-dom';
import { CommentsSection } from '../CommentsSection/CommentsSection';

type PostProps = {
   post: PostType,
};


export const Post = (props: PostProps) => {
   const navigate = useNavigate();

   const { user } = FetchPostWithUserData(props.post.userId.toString());

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
            <CommentsSection postId={props.post.id} />
         </div>
      </div>
   )
}