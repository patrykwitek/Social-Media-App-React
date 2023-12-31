import './style.scss';
import '../../../style/font.css';
import { BiX } from "react-icons/bi";
import { useEffect, useState } from 'react';
import React from 'react';
import { Photo } from '../Photo/Photo';
import { HiEye } from "react-icons/hi2";

type UsersPhotosGalleryItemProps = {
    album: any
}

export const UsersPhotosGalleryItem = (props: UsersPhotosGalleryItemProps) => {

    const [photos, setPhotosData] = useState<any[]>([]);
    const [photoModal, setPhotoModal] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState<any>({});

    useEffect(() => {
        const fetchPhotosFromAlbum = async () => {
            try {
                const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${props.album.id}`);
                const photosData = await photosResponse.json();
                setPhotosData(photosData);
            } catch (error) {
                console.error('Fetching photos data failed: ', error);
            }
        };

        fetchPhotosFromAlbum();
    }, [props.album.id]);

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
                                return <div className='displayed-photo' onClick={() => switchPhotoModal(photo)}>
                                    <img
                                        key={photo.id}
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