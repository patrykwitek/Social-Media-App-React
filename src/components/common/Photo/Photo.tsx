import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FetchPhotoWithUserData } from '../../../hooks/API/FetchPhotoWithUserData';
import { PhotoType } from '../../../types/PhotoType';
import { useTranslation } from 'react-i18next';

type PhotoProps = {
   photo: PhotoType
}

export const Photo = (props: PhotoProps) => {
   const [translation, i18n] = useTranslation("global");
   
   const navigate = useNavigate();

   const {album, user} = FetchPhotoWithUserData(props.photo.albumId.toString());
   const [showMore, setShowMore] = useState(false);

   const handleNavigateToUserPage = (userId: number) => {
      document.body.classList.remove('freeze-scrolling');
      navigate(`/user/${userId}/photos`);
   }

   return (
      <div className='somePhoto'>
         <div className='topPartOfPhoto'>
            <div className='userPhoto' onClick={() => handleNavigateToUserPage(user.id)}>
               <div>
                  <img src={profilePicture} alt={translation("profilePicture")} className='profilePicture' />
               </div>
               <div className='userPhotoUsername'>{user.username}</div>
            </div>
            <div className='photoDescription'>
               <div className='photoTitle'>
                  {props.photo.title}
               </div>
               <div className={`albumTitle ${showMore ? 'showMore' : 'showLess'}`}>
                  <span>{translation("album")}: </span>
                  <div className='albumLink' onClick={() => navigate(`album/${album.id}`)}>{album.title}</div>
               </div>
               <div className='showTitle' onClick={() => { setShowMore(!showMore) }}>
                  {showMore ? translation("showLess") : translation("showMore")}
               </div>
            </div>
         </div>
         <div className='bottomPartOfPhoto'>
            <img src={props.photo.url} alt={translation("photo")} className='displayedPhoto' loading='lazy'/>
         </div>
      </div>
   )
}