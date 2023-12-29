import './style.scss';
import '../../../style/font.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Album = () => {
    const { albumID } = useParams();

    const [albums, setAlbumData] = useState<any[]>([]);
    const [photos, setPhotosData] = useState<any[]>([]);

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
                                return <img key={photo.id} src={photo.thumbnailUrl} alt='Photo' loading='lazy' className='album-photo-item'/>
                            })
                        }
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}