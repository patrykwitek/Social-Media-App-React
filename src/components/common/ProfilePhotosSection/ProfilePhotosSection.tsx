import './style.scss';
import '../../../style/font.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

export const ProfilePhotosSection = () => {
    const { userID } = useParams();

    const [user, setUserData] = useState<any>({});
    const [albums, setAlbumData] = useState<any[]>([]);
    const [photosList, setPhotoList] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserPhotos = async () => {
            try {
                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const userData = await userResponse.json();
                setUserData(userData);
            } catch (error) {
                console.error('Fetching user data failed: ', error);
            }

            try {
                const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`);
                const albumsData = await albumsResponse.json();
                setAlbumData(albumsData);
            } catch (error) {
                console.error('Fetching albums data failed: ', error);
            }

            const fetchPhotos = async () => {
                const photosArray = [];
                for (const album of albums) {
                    try {
                        const photosFromAlbumResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
                        const photosData = await photosFromAlbumResponse.json();
                        photosArray.push(...photosData);
                    }
                    catch (error) {
                        console.error('Fetching photos data failed: ', error);
                    }
                }
                setPhotoList(photosArray);
            };

            fetchPhotos();
        };

        fetchUserPhotos();
    }, [userID, albums]);

    const navigate = useNavigate();
    
    return (
        <div className='profilePhotosSection'>
            {
                photosList.slice(0, 9).map((photo: any) => {
                    return <img key={photo.id} src={photo.url} alt="Photo" className='userProfilePhotoSection-photo' />
                })
            }
            {user && user.name && (
                <React.Fragment>
                    <div className='show-users-gallery' onClick={() => navigate(`../../user/${userID}/photos-gallery`)}>
                        Show {user.name.split(" ")[0]}'s gallery
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}