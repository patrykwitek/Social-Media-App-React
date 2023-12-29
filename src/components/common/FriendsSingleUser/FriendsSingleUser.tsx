import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';

type SingleUserProps = {
    username: string,
    onClick: any
}

export const FriendsSingleUser = (props: SingleUserProps) => {
    return (
        <div className='singleUser' onClick={props.onClick}>
            <img src={profilePicture} alt="Profile Picture" />
            <div className='singleUser-name'>
                {props.username}
            </div>
        </div>
    )
}