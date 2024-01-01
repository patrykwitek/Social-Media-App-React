import { useEffect, useState } from "react";

export const FetchUsersAlbums = (userID: string | undefined) => {
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

    return { albums };
}