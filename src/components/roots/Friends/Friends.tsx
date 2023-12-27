import './style.scss';
import '../../../style/font.css';
import { FriendsSingleUser } from '../../common/FriendsSingleUser/FriendsSingleUser';
import { SearchBar } from '../../common/SearchBar/SearchBar';
import { useEffect, useState } from 'react';

export const Friends = () => {
    const [filterUsers, setFilterUsers] = useState<{}[]>([]);
    const [allUsers, setAllUsers] = useState<{}[]>([]);
    const [searchInput, setSearchInput] = useState('');

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

    return (
        <div className='friendsPage'>
            <div className='friendsContainer'>
                <div className='friendsTitle'>
                    <SearchBar setSearchInput={setSearchInput} setFilterUsers={setFilterUsers} />
                </div>
                <div className='usersSections'>
                    {
                        searchInput == '' ?
                            allUsers.map((user: any, id: number) => {
                                return <FriendsSingleUser key={id} username={user.name} />
                            })
                            :
                            filterUsers.map((user: any, id: number) => {
                                return <FriendsSingleUser key={id} username={user.name} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}