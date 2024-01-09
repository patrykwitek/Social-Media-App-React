import './style.scss';
import '../../../style/font.css';
import profilePictureWoman from '../../../resources/images/profile-picture-woman.jpg'
import { CommentType } from '../../../types/CommentType';

type CommentProps = {
   comment: CommentType
};

export const Comment = (props: CommentProps) => {
   return (
      <div className='comment'>
         <div className='userComment'>
            <div className='photoUser'>
               <img src={profilePictureWoman} alt="profilePicture" className='profilePicture' />
            </div>
            <div className='nicknameUser'>
               <div className='nameComment'>Amanda Jonson</div>
               <div className='emailComment'>{props.comment.email}</div>
            </div>
         </div>
         <div className='bodyComment'>
            <div>{props.comment.name}</div>
            <div>{props.comment.body}</div>
         </div>
      </div>
   );
}