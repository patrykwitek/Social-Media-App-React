import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';

type SingleUserProps = {
    username: string
}

export const FriendsSingleUser = (props: SingleUserProps) => {
    return (
        <div className='singleUser'>
            <img src={profilePicture} alt="Profile Picture" />
            <div className='singleUser-name'>
                {props.username}
            </div>
        </div>
    )
}