import './style.scss';
import '../../../style/font.css';
import { FriendsSingleUser } from '../../common/FriendsSingleUser/FriendsSingleUser';
import { SearchBar } from '../../common/SearchBar/SearchBar';

export const Friends = () => {
    return (
        <div className='friendsPage'>
            <div className='friendsContainer'>
                <div className='friendsTitle'>
                    <SearchBar />
                </div>
                <div className='usersSections'>
                    <FriendsSingleUser userID={1} />
                    <FriendsSingleUser userID={2}/>
                    <FriendsSingleUser userID={3}/>
                </div>
            </div>
        </div>
    )
}