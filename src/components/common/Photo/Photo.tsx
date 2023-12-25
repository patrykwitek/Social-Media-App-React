import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { useNavigate } from 'react-router-dom';

type PhotoProps = {
   userName: string
}

export const Photo = (props: PhotoProps) => {
   const navigate = useNavigate();
   
   return (
      <div className='somePhoto'>
         <div className='leftPartOfPhoto'>
            <div className='userPhoto'>
               <div>
                  <img src={profilePicture} alt="profilePicture" className='profilePicture' />
               </div>
               <span className='userPhotoName' onClick={() => navigate('user/profilePhotos/')}>{props.userName}</span>
            </div>
            <div className='photoDescription'>
               <div className='photoDescriptionElement'>
                  <div className='albumNameSection'>Album name:</div>
                  <a className='albumNameLink'>Góry</a>
               </div>
               <div className='photoDescriptionElement'>
                  <div className='photoNameSection'>Photo name:</div>
                  <a className='photoNameLink'>zdjecie1</a>
               </div>
            </div>
         </div>
         <div className='rightPartOfPhoto'>
            <img src="https://via.placeholder.com/600/24f355" alt="sample photo" className='displayedPhoto' />
         </div>
      </div>
   )
}