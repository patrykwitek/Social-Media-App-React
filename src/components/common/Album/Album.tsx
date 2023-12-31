import './style.scss';
import '../../../style/font.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Photo } from '../Photo/Photo';
import { BiX } from "react-icons/bi";
import { HiEye } from "react-icons/hi2";
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export const Album = () => {
    const { albumID } = useParams();

    const [albums, setAlbumData] = useState<any[]>([]);
    const [photos, setPhotosData] = useState<any[]>([]);
    const [photoModal, setPhotoModal] = useState(false);
    const [chosenPhoto, setChosenPhoto] = useState<any>({});

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?id=${albumID}`);
                const albumsData = await albumsResponse.json();
                setAlbumData(albumsData);

                const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumsData[0].id}`);
                const photosData = await photosResponse.json();
                setPhotosData(photosData);
            } catch (error) {
                console.error('Fetching album data failed: ', error);
            }
        };

        fetchAlbum();
    }, [albumID]);

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
                            Album
                        </div>
                        <div className='album-title'>
                            {albums[0].title}
                        </div>
                    </div>
                    <div className='album-photos'>
                        {
                            photos.map((photo: any) => {
                                return <div className='displayed-photo' onClick={() => switchPhotoModal(photo)}>
                                    <img
                                        key={photo.id}
                                        src={photo.thumbnailUrl}
                                        alt='Photo'
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