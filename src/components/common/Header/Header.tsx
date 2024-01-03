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

export const Header = () => {
    const auth = useAuth();

    return (
        !auth.user ? (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name="Home Page" icon={<BsHouse />} /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name="About" icon={<BsQuestionCircle />} /></NavLink>
                <Greeting />
            </nav>
        ) : (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name="Photos" icon={<HiOutlinePhoto />} /></NavLink>
                <NavLink to='/posts' className='headerLink'><HeaderSection name="Posts" icon={<GoFileDirectory />} /></NavLink>
                <NavLink to='/friends' className='headerLink'><HeaderSection name="Friends" icon={<LiaUserFriendsSolid />} /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name="About" icon={<BsQuestionCircle />} /></NavLink>
                <Greeting />
            </nav>
        )
    )
}