import { useEffect, useState } from "react";

export const FetchPhotosForProfileSection = (userID: string | undefined) => {
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

    return {user, photosList};
}