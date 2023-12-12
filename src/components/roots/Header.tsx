import '../../style/header.css';
import '../../style/font.css';
import { Link } from 'react-router-dom';
import { HeaderSection } from './HeaderSection';
import { HeaderUserSection } from './HeaderUserSection';
import { LoginBtn } from './LoginBtn';

type HeaderProps = {
    isLoggedIn: boolean
}

export const Header = (props: HeaderProps) => {
    return (
        <nav className="header">
            {/* do przesyłania danych lista z odc 4 */}
            <Link to='/' className='headerLink'><HeaderSection name="Main Page"/></Link>
            <Link to='/photos' className='headerLink'><HeaderSection name="Photos"/></Link>
            <Link to='/toDoS' className='headerLink'><HeaderSection name="Your ToDo's"/></Link>
            {props.isLoggedIn ? <HeaderUserSection userName="Patrick"/> : <LoginBtn/>}
        </nav>
    )
}