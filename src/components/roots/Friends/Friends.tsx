import './style.scss';
import '../../../style/font.css';
import { FriendsSingleUser } from '../../common/FriendsSingleUser/FriendsSingleUser';
import { SearchBar } from '../../common/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FetchUsers } from '../../../hooks/API/FetchUsers';

export const Friends = () => {
    const [filterUsers, setFilterUsers] = useState<{}[]>([]);
    const [searchInput, setSearchInput] = useState('');

    const { allUsers } = FetchUsers();
    
    const navigate = useNavigate();

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
                                return <FriendsSingleUser key={id} username={user.name} onClick={() => navigate(`../user/${user.id}/photos`)} />
                            })
                            :
                            filterUsers.map((user: any, id: number) => {
                                return <FriendsSingleUser key={id} username={user.name} onClick={() => navigate(`../user/${user.id}/photos`)} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}