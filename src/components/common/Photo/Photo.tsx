import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { useNavigate } from 'react-router-dom';

type PhotoProps = {
   userID: number
}

export const Photo = (props: PhotoProps) => {
   const navigate = useNavigate();
   
   let username;
   // note: temporary solution
   if (props.userID == 1) {
      username = 'patrykwitek';
  }
  else if (props.userID == 2) {
      username = 'ruslan';
  }
  else if (props.userID == 3) {
      username = 'ihor';
  }

   return (
      <div className='somePhoto'>
         <div className='topPartOfPhoto'>
            <div className='userPhoto' onClick={() => navigate(`user/${props.userID}/photos`)}>
               <div>
                  <img src={profilePicture} alt="profilePicture" className='profilePicture' />
               </div>
               <div className='userPhotoUsername'>{username}</div>
            </div>
            <div className='photoDescription'>
               <div className='photoDescriptionElement'>
                  <a className='albumNameLink'>Góry</a>
               </div>
               <span className='albumToPhoto'>/</span>
               <div className='photoDescriptionElement'>
                  <a className='photoNameLink'>zdjecie1</a>
               </div>
            </div>
         </div>
         <div className='bottomPartOfPhoto'>
            <img src="https://via.placeholder.com/600/24f355" alt="Photo" className='displayedPhoto' />
         </div>
      </div>
   )
}