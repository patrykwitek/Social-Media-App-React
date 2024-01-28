import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { useTranslation } from 'react-i18next';

type SingleUserProps = {
    username: string,
    onClick: () => void
}

export const FriendsSingleUser = (props: SingleUserProps) => {
    const [translation, i18n] = useTranslation("global");
    
    return (
        <div className='singleUser' onClick={props.onClick}>
            <img src={profilePicture} alt={translation("profilePicture")} />
            <div className='singleUser-name'>
                {props.username}
            </div>
        </div>
    )
}