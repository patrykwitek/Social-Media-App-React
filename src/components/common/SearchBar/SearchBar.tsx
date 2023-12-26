import './style.scss';
import '../../../style/font.css';
import {FaSearch} from 'react-icons/fa';

export const SearchBar = () => {
    return (
        <div className="searchBar">
            <FaSearch className='search-icon'/>
            <input type='text' placeholder='Search for the users' className='search-input' />
        </div>
    )
}