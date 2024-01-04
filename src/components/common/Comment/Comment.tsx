import './style.scss';
import '../../../style/font.css';
import profilePictureWoman from '../../../resources/images/profile-picture-woman.jpg'

export const Comment = () => {
   return (
      <div className='comment'>
         <div className='userComment'>
            <div className='photoUser'>
               <img src={profilePictureWoman} alt="profilePicture" className='profilePicture' />
            </div>
            <div className='nicknameUser'>
               <div className='nameComment'>Amanda Jonson</div>
               <div className='emailComment'>amanda.jonson@mail.com</div>
            </div>
         </div>
         <div className='bodyComment'>
            Lorem
         </div>
      </div>
   );
}