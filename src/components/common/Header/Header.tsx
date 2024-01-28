import './style.scss';
import '../../../style/font.css';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Greeting } from '../Greeting/Greeting';
import { useAuth } from '../../../hooks/Auth/Auth';
import { LiaUserFriendsSolid } from "react-icons/lia";
import { HiOutlinePhoto } from "react-icons/hi2";
import { GoFileDirectory } from "react-icons/go";
import { BsHouse } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { useTranslation } from 'react-i18next';

export const Header = () => {
    const auth = useAuth();
    const [translation, i18n] = useTranslation("global");

    return (
        !auth.user ? (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name={translation("homePage")} icon={<BsHouse />} /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name={translation("about")} icon={<BsQuestionCircle />} /></NavLink>
                <Greeting />
            </nav>
        ) : (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name={translation("photosTitle")} icon={<HiOutlinePhoto />} /></NavLink>
                <NavLink to='/posts' className='headerLink'><HeaderSection name={translation("posts")} icon={<GoFileDirectory />} /></NavLink>
                <NavLink to='/friends' className='headerLink'><HeaderSection name={translation("friends")} icon={<LiaUserFriendsSolid />} /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name={translation("about")} icon={<BsQuestionCircle />} /></NavLink>
                <Greeting />
            </nav>
        )
    )
}