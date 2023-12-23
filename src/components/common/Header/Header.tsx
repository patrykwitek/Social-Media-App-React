import './style.scss';
import '../../../style/font.css';
import { Link } from 'react-router-dom';
import { HeaderSection } from '../HeaderSection/HeaderSection';
import { Greeting } from '../Greeting/Greeting';

type HeaderProps = {
    isLoggedIn: boolean
}

export const Header = (props: HeaderProps) => {
    return (
        <nav className="header">
            {/* do przesyłania danych lista z odc 4 */}
            <Link to='/' className='headerLink'><HeaderSection name="Photos"/></Link>
            <Link to='/posts' className='headerLink'><HeaderSection name="Posts"/></Link>
            <Link to='/toDoS' className='headerLink'><HeaderSection name="Your ToDo's"/></Link>
            <Link to='/about' className='headerLink'><HeaderSection name="About"/></Link>
            <Greeting isLoggedIn={props.isLoggedIn} />
        </nav>
    )
}