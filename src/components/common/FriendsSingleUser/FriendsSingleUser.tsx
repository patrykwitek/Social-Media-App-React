import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';

type SingleUserProps = {
    userID: number
}

export const FriendsSingleUser = (props: SingleUserProps) => {
    let username;

    // note: temporary solution
    if (props.userID == 1) {
        username = 'patrykwitek';
    }
    else if (props.userID == 2) {
        username = 'ruslan';
    }
    else if (props.userID == 3) {
        username = 'ihor';
    }

    return (
        <div className='singleUser'>
            <img src={profilePicture} alt="Profile Picture" />
            <div className='singleUser-name'>
                {username}
            </div>
        </div>
    )
}