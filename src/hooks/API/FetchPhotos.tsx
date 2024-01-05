import { useEffect, useState } from "react";
import { PhotoType } from "../../types/PhotoType";

export const FetchPhotos = () => {
    const [photosAPI, setPhotosAPI] = useState<PhotoType[]>([]);

    const shuffle = (array: PhotoType[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };

    const displayedPhotosNumber: number = 200;

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

    return { photosAPI };
}