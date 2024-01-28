import './style.scss';
import '../../../style/font.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Photo } from '../Photo/Photo';
import { BiX } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { FetchAlbumPhotosData } from '../../../hooks/API/FetchAlbumPhotosData';
import { useTranslation } from 'react-i18next';

export const Album = () => {
    const [translation, i18n] = useTranslation("global");
    
    const { albumID } = useParams();
    const { albums, photos } = FetchAlbumPhotosData(albumID);
    
    const [photoModal, setPhotoModal] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState<any>({});

    const switchPhotoModal = (photo: any) => {
        setPhotoModal(!photoModal);
        setChosenPhoto(photo);
    }

    if(photoModal) {
        document.body.classList.add('freeze-scrolling');
    }
    else {
        document.body.classList.remove('freeze-scrolling');
    }

    return (
        <div className='albumPage'>
            {albums[0] && photos ? (
                <div className='album-container'>
                    <div className='top-container'>
                        <div className='album-info'>
                            {translation("album")}
                        </div>
                        <div className='album-title'>
                            {albums[0].title}
                        </div>
                    </div>
                    <div className='album-photos'>
                        {
                            photos.map((photo: any) => {
                                return <div key={photo.id} className='displayed-photo' onClick={() => switchPhotoModal(photo)}>
                                    <img
                                        src={photo.thumbnailUrl}
                                        alt={translation("photo")}
                                        title={translation("showPhoto")}
                                        loading='lazy'
                                        className='album-photo-item'
                                    />
                                    <HiEye className='eye'/>
                                </div>
                            })
                        }
                    </div>
                </div>
            ) : (
                <LoadingScreen />
            )}

            {photoModal && (
                <div className='photo-modal'>
                    <div className='overlay' onClick={() => setPhotoModal(!photoModal)}></div>
                    <div className='photo-modal-content'>
                        <Photo key={chosenPhoto.id} photo={chosenPhoto} />
                        <div className='close' onClick={() => setPhotoModal(!photoModal)}>
                            <BiX />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}