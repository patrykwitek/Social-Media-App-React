import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type PhotoProps = {
   photo: any
}

export const Photo = (props: PhotoProps) => {
   const navigate = useNavigate();

   const [album, setAlbumData] = useState<any>({});
   const [user, setUserData] = useState<any>({});
   const [showMore, setShowMore] = useState(false);

   useEffect(() => {
      const fetchAlbum = async () => {
         try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${props.photo.albumId}`);
            const albumData = await response.json();
            setAlbumData(albumData);

            const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${albumData.userId}`);
            const userData = await userResponse.json();
            setUserData(userData);
         } catch (error) {
            console.error('Fetching data failed: ', error);
         }
      };

      fetchAlbum();
   }, [props.photo.albumId]);

   return (
      <div className='somePhoto'>
         <div className='topPartOfPhoto'>
            <div className='userPhoto' onClick={() => navigate(`user/${user.id}/photos`)}>
               <div>
                  <img src={profilePicture} alt="profilePicture" className='profilePicture' />
               </div>
               <div className='userPhotoUsername'>{user.username}</div>
            </div>
            <div className='photoDescription'>
               <div className='photoTitle'>
                  {props.photo.title}
               </div>
               <div className={`albumTitle ${showMore ? 'showMore' : 'showLess'}`}>
                  <span>Album: </span>
                  <div className='albumLink' onClick={() => navigate(`album/${album.id}`)}>{album.title}</div>
               </div>
               <div className='showTitle' onClick={() => { setShowMore(!showMore) }}>
                  {showMore ? 'Show Less' : 'Show More'}
               </div>
            </div>
         </div>
         <div className='bottomPartOfPhoto'>
            <img src={props.photo.url} alt="Photo" className='displayedPhoto' loading='lazy'/>
         </div>
      </div>
   )
}