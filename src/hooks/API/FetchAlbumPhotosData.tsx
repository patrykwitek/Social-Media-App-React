import { useEffect, useState } from "react";

export const FetchAlbumPhotosData = (albumID: string | undefined) => {
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

    return {albums, photos};
}