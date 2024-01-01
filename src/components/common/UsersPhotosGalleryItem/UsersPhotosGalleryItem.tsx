import './style.scss';
import '../../../style/font.css';
import { BiX } from "react-icons/bi";
import { useEffect, useState } from 'react';
import React from 'react';
import { Photo } from '../Photo/Photo';
import { HiEye } from "react-icons/hi2";
import { FetchAlbumPhotosDataForGallery } from '../../../hooks/API/FetchAlbumPhotosDataForGallery';

type UsersPhotosGalleryItemProps = {
    album: any
}

export const UsersPhotosGalleryItem = (props: UsersPhotosGalleryItemProps) => {

    const [photoModal, setPhotoModal] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState<any>({});
    const { photos } = FetchAlbumPhotosDataForGallery(props.album.id);

    const switchPhotoModal = (photo: any) => {
        setPhotoModal(!photoModal);
        setChosenPhoto(photo);
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
                        <div className='close' onClick={() => setPhotoModal(!photoModal)}>
                            <BiX />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}