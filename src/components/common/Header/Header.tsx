import './style.scss';
import '../../../style/font.css';
import { NavLink } from 'react-router-dom';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Greeting } from '../Greeting/Greeting';

type HeaderProps = {
    isLoggedIn: boolean
}

export const Header = (props: HeaderProps) => {
    return (
        <nav className="header">
            {/* do przesyłania danych lista z odc 4 */}
            <NavLink to='/' className='headerLink'><HeaderSection name="Photos"/></NavLink>
            <NavLink to='/posts' className='headerLink'><HeaderSection name="Posts"/></NavLink>
            <NavLink to='/friends' className='headerLink'><HeaderSection name="Friends"/></NavLink>
            <NavLink to='/about' className='headerLink'><HeaderSection name="About"/></NavLink>
            <Greeting isLoggedIn={props.isLoggedIn} />
        </nav>
    )
}