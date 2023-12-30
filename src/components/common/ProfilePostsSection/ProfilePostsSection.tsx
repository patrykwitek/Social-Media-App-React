import './style.scss';
import '../../../style/font.css';
import { ProfilePostItem } from '../ProfilePostItem/ProfilePostItem';

export const ProfilePostsSection = () => {
    return (
        <div className='profilePostsSection'>
            <ProfilePostItem />
            <ProfilePostItem />
            <ProfilePostItem />
            <ProfilePostItem />
        </div>
    )
}