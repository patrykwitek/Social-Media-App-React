import './style.scss';
import '../../../style/font.css';
import { useEffect, useState } from 'react';
import React from 'react';

type UsersPhotosGalleryItemProps = {
    album: any
}

export const UsersPhotosGalleryItem = (props: UsersPhotosGalleryItemProps) => {

    const [photos, setPhotosData] = useState<any[]>([]);

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

    return (
        <div className='single-album'>
            <div className='album-top-part'>
                <div className='album-info'>Album</div>
                <div className='album-title'>{props.album.title}</div>
            </div>
            {photos && (
                <React.Fragment>
                    <div className='album-photos'>
                        {
                            photos.map((photo: any) => {
                                return <img key={photo.id} src={photo.thumbnailUrl} alt='Photo' loading='lazy'/>
                            })
                        }
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}