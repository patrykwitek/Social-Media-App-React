import { useEffect, useState } from "react";

export const FetchAlbumPhotosDataForGallery = (albumID: string | undefined) => {
    const [photos, setPhotosData] = useState<any[]>([]);
    
    useEffect(() => {
        const fetchPhotosFromAlbum = async () => {
            try {
                const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumID}`);
                const photosData = await photosResponse.json();
                setPhotosData(photosData);
            } catch (error) {
                console.error('Fetching photos data failed: ', error);
            }
        };

        fetchPhotosFromAlbum();
    }, [albumID]);

    return {photos};
}