import './style.scss';
import '../../../style/font.css';
import { BiX } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { useState } from 'react';
import React from 'react';
import { Photo } from '../Photo/Photo';
import { HiEye } from "react-icons/hi2";
import { FetchAlbumPhotosDataForGallery } from '../../../hooks/API/FetchAlbumPhotosDataForGallery';
import { PhotoType } from '../../../types/PhotoType';
import { useAuth } from '../../../hooks/Auth/Auth';
import { FetchPhotoWithUserData } from '../../../hooks/API/FetchPhotoWithUserData';

type UsersPhotosGalleryItemProps = {
    album: any
}

export const UsersPhotosGalleryItem = (props: UsersPhotosGalleryItemProps) => {
    const auth = useAuth();

    const [photoModal, setPhotoModal] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState<PhotoType>({
        albumId: 0,
        id: 0,
        title: "",
        url: "",
        thumbnailUrl: ""
    });

    const { photos } = FetchAlbumPhotosDataForGallery(props.album.id);
    const { album, user } = FetchPhotoWithUserData(chosenPhoto.albumId.toString());

    const switchPhotoModal = (photo: any) => {
        setPhotoModal(!photoModal);
        setChosenPhoto(photo);
    }

    const handleRemovePhoto = () => {
        fetch(`https://jsonplaceholder.typicode.com/photos/${chosenPhoto.id}`, {
            method: 'DELETE'
        });

        setPhotoModal(!photoModal);
    }

    if (photoModal) {
        document.body.classList.add('freeze-scrolling');
    }
    else {
        document.body.classList.remove('freeze-scrolling');
    }

    return (
        <div className='single-album'>
            <div className='album-top-part'>
                <div className='album-info'>Album</div>
                <div className='album-title'>{props.album.title}</div>
            </div>
            {
                <React.Fragment>
                    <div className='album-photos'>
                        {
                            photos.map((photo: any) => {
                                return <div key={photo.id} className='displayed-photo' onClick={() => switchPhotoModal(photo)}>
                                    <img
                                        src={photo.thumbnailUrl}
                                        alt='Photo'
                                        loading='lazy'
                                    />
                                    <HiEye className='eye' />
                                </div>
                            })
                        }
                    </div>
                </React.Fragment>
            }

            {photoModal && (
                <div className='photo-modal'>
                    <div className='overlay' onClick={() => setPhotoModal(!photoModal)}></div>
                    <div className='photo-modal-content'>
                        <Photo key={chosenPhoto.id} photo={chosenPhoto} />
                        <div className='close' title='Close' onClick={() => setPhotoModal(!photoModal)}>
                            <BiX />
                        </div>
                        {
                            auth.user?.id == user.id ? (
                                <div className='remove' title='Remove Photo' onClick={handleRemovePhoto}>
                                    <MdDelete />
                                </div>
                            ) : (
                                ''
                            )
                        }
                    </div>
                </div>
            )}
        </div>
    )
}