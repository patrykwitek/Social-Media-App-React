import { useEffect, useState } from "react";

export const FetchUserData = (userID: string | undefined) => {
    const [user, setUserData] = useState<any>({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const userData = await userResponse.json();
                setUserData(userData);
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchUser();
    }, [userID]);

    return { user };
}