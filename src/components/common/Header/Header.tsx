import './style.scss';
import '../../../style/font.css';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Greeting } from '../Greeting/Greeting';
import { useAuth } from '../../../hooks/Auth/Auth';

export const Header = () => {
    const auth = useAuth();

    return (
        !auth.user ? (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name="Welcome Page" /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name="About" /></NavLink>
                <Greeting />
            </nav>
        ) : (
            <nav className="header">
                <NavLink to='/' className='headerLink'><HeaderSection name="Photos" /></NavLink>
                <NavLink to='/posts' className='headerLink'><HeaderSection name="Posts" /></NavLink>
                <NavLink to='/friends' className='headerLink'><HeaderSection name="Friends" /></NavLink>
                <NavLink to='/about' className='headerLink'><HeaderSection name="About" /></NavLink>
                <Greeting />
            </nav>
        )
    )
}