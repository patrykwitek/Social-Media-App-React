import './style.scss';
import '../../../style/font.css';

type ProfileNavigationItemProps = {
    name: string
}

export const ProfileNavigationItem = (props: ProfileNavigationItemProps) => {
    return (
        <div className='userProfileNavigation-item'>
            {props.name}
        </div>
    )
}