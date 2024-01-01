import './style.scss';
import '../../../style/font.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

type SearchBarProps = {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    setFilterUsers: React.Dispatch<React.SetStateAction<{}[]>>
}

export const SearchBar = (props: SearchBarProps) => {    
    const [input, setInput] = useState('');

    const fetchFilteredUsersData = (value: string) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((userData: any[]) => {
                const filteredUsers = userData.filter(user => {
                    return (
                        user && user.name && user.name.toLowerCase().includes(value)
                    );
                });

                props.setFilterUsers(filteredUsers);
            })
            .catch(error => {
                console.error('Fetching data failed: ', error);
            });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        props.setSearchInput(event.target.value);
        fetchFilteredUsersData(event.target.value);
    };

    return (
        <div className="searchBar">
            <FaSearch className='search-icon' />
            <input
                type='text'
                placeholder='Search for the users'
                className='search-input'
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}