import './style.scss';
import '../../../style/font.css';
import { useParams } from 'react-router-dom';
import { UsersPhotosGalleryItem } from '../UsersPhotosGalleryItem/UsersPhotosGalleryItem';
import { useEffect, useState } from 'react';

export const UsersPhotosGallery = () => {
    const { userID } = useParams();

    const [albums, setAlbumData] = useState<any[]>([]);

    useEffect(() => {
        const fetchUserAlbums = async () => {
            try {
                const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userID}`);
                const albumsData = await albumsResponse.json();
                setAlbumData(albumsData);
            } catch (error) {
                console.error('Fetching albums data failed: ', error);
            }
        };

        fetchUserAlbums();
    }, [userID]);

    return (
        <div className='usersGalleryPage'>
            {
                albums[0] ? (
                albums.map((album: any) => {
                    return <UsersPhotosGalleryItem key={album.id} album={album} />
                })
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    )
}