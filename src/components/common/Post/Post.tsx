import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { PostType } from '../../../types/PostType';
import { FetchUserData } from '../../../hooks/API/FetchUserData';
import { useNavigate } from 'react-router-dom';
import { CommentsSection } from '../CommentsSection/CommentsSection';
import { useTranslation } from 'react-i18next';

type PostProps = {
   post: PostType,
};


export const Post = (props: PostProps) => {
   const [translation, i18n] = useTranslation("global");
   
   const navigate = useNavigate();

   const { user } = FetchUserData(props.post.userId.toString());

   const handleNavigateToUserPage = (userId: number) => {
      navigate(`/user/${userId}/posts`);
   }

   return (
      <div className='postsPage'>
         <div className='somePost'>
            <div className='topPartOfPost'>
               <div className='userPost' onClick={() => handleNavigateToUserPage(user.id)}>
                  <div>
                     <img src={profilePicture} alt={translation("profilePicture")} className='profilePicture' />
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