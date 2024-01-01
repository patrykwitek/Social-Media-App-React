import { useEffect, useState } from "react";

export const FetchUsers = () => {
    const [allUsers, setAllUsers] = useState<{}[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const userData = await response.json();
                setAllUsers(userData);
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchUsers();
    }, []);

    return { allUsers };
}