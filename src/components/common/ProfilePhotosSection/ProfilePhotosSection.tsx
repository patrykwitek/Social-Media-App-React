import './style.scss';
import '../../../style/font.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

export const ProfilePhotosSection = () => {
    const { userID } = useParams();

    const [user, setUserData] = useState<any>({});
    const [photosList, setPhotoList] = useState<any[]>([]);

    const photosToDisplayNumber: number = 9;

    useEffect(() => {
        const fetchUserPhotos = async () => {
            try {
                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const userData = await userResponse.json();
                setUserData(userData);

                const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`);
                const albumsData = await albumsResponse.json();

                const photosArray: any[] = [];
                for (const album of albumsData) {
                    const photosFromAlbumResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
                    const photosData = await photosFromAlbumResponse.json();
                    photosArray.push(...photosData);
                }
                setPhotoList(photosArray.slice(0, photosToDisplayNumber));
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchUserPhotos();
    }, [userID]);

    const navigate = useNavigate();

    return (
        <div className='profilePhotosSection'>
            {
                photosList[0] ? (
                photosList.map((photo: any) => {
                    return <img
                        key={photo.id}
                        src={photo.url}
                        alt="Photo"
                        className='userProfilePhotoSection-photo'
                        loading='lazy'
                    />
                })
                ) : (
                    <p>Loading...</p>
                )
            }
            {user && user.name && (
                <React.Fragment>
                    <div className='show-users-gallery' onClick={() => navigate(`../../user/${userID}/gallery`)}>
                        Show {user.name.split(" ")[0]}'s gallery
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}