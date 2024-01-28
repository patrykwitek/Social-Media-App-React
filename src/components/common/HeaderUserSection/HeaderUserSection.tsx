import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import profile from '../../../resources/images/dropdown-profile.png';
import edit from '../../../resources/images/dropdown-edit.png';
import settings from '../../../resources/images/dropdown-settings.png';
import logout from '../../../resources/images/dropdown-logout.png';
import add from '../../../resources/images/add.png';
import addPhoto from '../../../resources/images/add-photo.png';
import addPost from '../../../resources/images/add-post.png';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/Auth/Auth';
import { useTranslation } from 'react-i18next';

export const HeaderUserSection = () => {
    const [translation, i18n] = useTranslation("global");
    
    const [open, setOpen] = useState(false);
    const [addSectionOpen, setAddSectionOpen] = useState(false);

    const auth = useAuth();

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
            setAddSectionOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    const navigate = useNavigate();

    const userID = auth.user?.id;
    
    const handleLogout = () => {
        auth.logout();
        navigate('/');
    }
    
    return (
        <div className='headerUserSection' ref={dropdownRef}>
            <div className='dropdown-menu-link' onClick={() => { setOpen(!open) }}>
                <div className={`userNameSection ${open ? 'highlight' : 'nothighlight'}`}>
                    {auth.user?.name.split(" ")[0]}
                </div>
                <div className='userWelcomeSectionPicture'>
                    <img src={profilePicture} alt={translation("profilePicture")} className='userProfilePicture' />
                </div>
            </div>
            <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
                <div className='dropdown-user-info'>
                    <div className='dropdown-userFirstName'>
                        {auth.user?.name}
                    </div>
                    <div className='dropdown-userName'>
                        @{auth.user?.username}
                    </div>
                </div>
                <DropdownItem img={profile} text={translation("profile")} onClick={() => navigate(`user/${userID}/photos`)}/>
                <DropdownItem img={add} text={translation("add")} onClick={() => { setAddSectionOpen(!addSectionOpen) }}/>
                <DropdownItem img={edit} text={translation("editProfile")} onClick={() => navigate('edit-user')}/>
                <DropdownItem img={settings} text={translation("settings")} onClick={() => navigate('settings')}/>
                <DropdownItem img={logout} text={translation("logout")} onClick={handleLogout}/>
                <div className={`add-section ${addSectionOpen ? 'active' : 'inactive'}`}>
                    <DropdownItem img={addPhoto} text={translation("photo")} onClick={() => navigate('add-photo')}/>
                    <DropdownItem img={addPost} text={translation("post")} onClick={() => navigate('add-post')}/>
                </div>
            </div>
        </div>
    )
}