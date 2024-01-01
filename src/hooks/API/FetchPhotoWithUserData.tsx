import { useEffect, useState } from "react";

export const FetchPhotoWithUserData = (albumID: string | undefined) => {
    const [album, setAlbumData] = useState<any>({});
    const [user, setUserData] = useState<any>({});

    useEffect(() => {
        const fetchAlbum = async () => {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumID}`);
                const albumData = await response.json();
                setAlbumData(albumData);

                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${albumData.userId}`);
                const userData = await userResponse.json();
                setUserData(userData);
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchAlbum();
    }, [albumID]);

    return {album, user};
}