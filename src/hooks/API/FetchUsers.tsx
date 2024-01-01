import { useEffect, useState } from "react";
import { User } from "../../types/UserType";

export const FetchUsers = () => {
    const [allUsers, setAllUsers] = useState<User[]>([]);

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