import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import profile from '../../../resources/images/dropdown-profile.png';
import edit from '../../../resources/images/dropdown-edit.png';
import settings from '../../../resources/images/dropdown-settings.png';
import logout from '../../../resources/images/dropdown-logout.png';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { useState } from 'react';

type HeaderUserSectionProps = {
    userName: string
}

export const HeaderUserSection = (props: HeaderUserSectionProps) => {
    const [open, setOpen] = useState(false);

    return (
        <div className='headerUserSection'>
            <div className='dropdown-menu-link' onClick={() => { setOpen(!open) }}>
                <div className='userNameSection'>
                    {props.userName}
                </div>
                <div className='userWelcomeSectionPicture'>
                    <img src={profilePicture} alt="Profile Picture" className='userProfilePicture' />
                </div>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <div className='dropdown-user-info'>
                    <div className='dropdown-userFirstName'>
                        Patryk Witek
                    </div>
                    <div className='dropdown-userName'>
                        @patrykwitek
                    </div>
                </div>
                <DropdownItem img={profile} text='Profile' />
                <DropdownItem img={edit} text='Edit Profile' />
                <DropdownItem img={settings} text='Settings' />
                <DropdownItem img={logout} text='Logout' />
            </div>
        </div>
    )
}