import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';

const Photos = () => {
    const [photosAPI, setPhotosAPI] = useState<{}[]>([]);

    const shuffle = (array: {}[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const displayedPhotosNumber:number = 1000;

    useEffect(() => {
        const fetchPhotos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/photos');
                let photosData = await response.json();
                photosData = shuffle(photosData); 
                setPhotosAPI(photosData.slice(0, displayedPhotosNumber));
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchPhotos();
    }, []);

    return (
        <div className='photosPage'>
            <div className='photosContent'>
                {
                    photosAPI[0] ? (
                    photosAPI.map((photo: any, id: number) => {
                        return <Photo key={photo.id} photo={photo} />
                    })
                    ) : (
                        <LoadingScreen />
                    )
                }
            </div>
        </div>
    )
}

export default Photos;