import './style.scss';
import '../../../style/font.css';
import { useParams } from 'react-router-dom';
import { UsersPhotosGalleryItem } from '../UsersPhotosGalleryItem/UsersPhotosGalleryItem';
import { useEffect, useState } from 'react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { FetchUsersAlbums } from '../../../hooks/API/FetchUsersAlbums';

export const UsersPhotosGallery = () => {
    const { userID } = useParams();

    const { albums } = FetchUsersAlbums(userID);

    return (
        <div className='usersGalleryPage'>
            {
                albums[0] ? (
                albums.map((album: any) => {
                    return <UsersPhotosGalleryItem key={album.id} album={album} />
                })
                ) : (
                    <LoadingScreen />
                )
            }
        </div>
    )
}