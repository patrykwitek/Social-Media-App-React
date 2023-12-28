import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { useEffect, useState } from 'react';

export const Photos = () => {
    const [photosAPI, setPhotosAPI] = useState<{}[]>([]);

    const shuffle = (array: {}[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                let photosData = await response.json();
                photosData = shuffle(photosData); 
                setPhotosAPI(photosData);
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchPhotos();
    }, []);

    const displayedPhotosNumber = 15;

    return (
        <div className='photosPage'>
            <div className='photosContent'>
                {
                    photosAPI.slice(0, displayedPhotosNumber).map((photo: any, id: number) => {
                        return <Photo key={photo.id} photo={photo} />
                    })
                }
            </div>
        </div>
    )
}