import './style.scss';
import '../../../style/font.css';
import profilePictureWoman from '../../../resources/images/profile-picture-comment.png'
import { CommentType } from '../../../types/CommentType';
import { MdDelete } from 'react-icons/md';
import { useAuth } from '../../../hooks/Auth/Auth';
import { FetchUserData } from '../../../hooks/API/FetchUserData';
import { FetchPostsForProfileSection } from '../../../hooks/API/FetchPostsForProfileSection';

type CommentProps = {
   comment: CommentType,
   postId: number
};

export const Comment = (props: CommentProps) => {
   const auth = useAuth();

   const userID: string = auth.user?.id?.toString() || '';

   const { postsList } = FetchPostsForProfileSection(userID);

   const isLoggedUserPost = () => {
      let userHasPosted = false;

      postsList.forEach(post => {
         if (post.id == props.postId) {
            userHasPosted = true;
         }
      });

      return userHasPosted;
   }

   const handleRemoveComment = () => {
      fetch(`https://jsonplaceholder.typicode.com/comments/${props.comment.id}`, {
         method: 'DELETE'
      });
   }

   return (
      <div className='comment'>
         <div className='userComment'>
            <div className='user-section'>
               <div className='photoUser'>
                  <img src={profilePictureWoman} alt="profilePicture" className='profilePicture' />
               </div>
               <div className='nicknameUser'>
                  <div className='nameComment'>{props.comment.email.split('@')[0]}</div>
                  <div className='emailComment'>{props.comment.email}</div>
               </div>
            </div>
            {
               isLoggedUserPost() ? (
                  <div className='remove-comment-section' onClick={handleRemoveComment}>
                     <MdDelete className='remove-comment-icon' />
                  </div>
               ) : (
                  ''
               )
            }
         </div>
         <div className='bodyComment'>
            <div className='comment-title'>{props.comment.name}</div>
            <div className='comment-body'>{props.comment.body}</div>
         </div>
      </div>
   );
}