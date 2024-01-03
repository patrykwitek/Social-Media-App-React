import { useEffect, useState } from "react";
import { Album } from "../../types/Album";

export const FetchUsersAlbums = (userID: string | undefined) => {
    const [albums, setAlbumData] = useState<Album[]>([]);

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