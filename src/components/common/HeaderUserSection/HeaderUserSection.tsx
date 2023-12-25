import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import profile from '../../../resources/images/dropdown-profile.png';
import edit from '../../../resources/images/dropdown-edit.png';
import settings from '../../../resources/images/dropdown-settings.png';
import logout from '../../../resources/images/dropdown-logout.png';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

type HeaderUserSectionProps = {
    userName: string
}

export const HeaderUserSection = (props: HeaderUserSectionProps) => {
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    const navigate = useNavigate();
    
    return (
        <div className='headerUserSection' ref={dropdownRef}>
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
                <DropdownItem img={profile} text='Profile' onClick={() => navigate('profile/profilePhotos')}/>
                <DropdownItem img={edit} text='Edit Profile' onClick={() => navigate('edit-profile')}/>
                <DropdownItem img={settings} text='Settings' onClick={() => navigate('settings')}/>
                <DropdownItem img={logout} text='Logout' onClick={() => navigate('')}/>
            </div>
        </div>
    )
}