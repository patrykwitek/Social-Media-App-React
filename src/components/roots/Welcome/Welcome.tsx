import './style.scss';
import '../../../style/font.css';
import welcomePagePicture from '../../../resources/images/welcome-page-picture.png';
import { useNavigate } from 'react-router-dom';
import { RiLoginBoxLine } from 'react-icons/ri';

export const Welcome = () => {
    const navigate = useNavigate();

    return (
        <div className='welcome-page'>
            <div className='welcome-page-top'>
                <p>
                    Welcome to social media application!
                </p>
                <p>
                    Buid your own account, write posts & publish photos
                </p>
                <p id='bottom-description'>
                    Let other people see and comment your work
                </p>
            </div>
            <div className='welcome-page-login'>
                <button onClick={() => navigate('/login')}>
                    Start Exploring <RiLoginBoxLine className='login-icon' />
                </button>
            </div>
            <img src={welcomePagePicture} alt="Profile Picture" className='welcome-page-picture'/>
            {/* link to welcome page picture(free license): https://www.istockphoto.com/pl/wektor/ludzie-dyskutuj%C4%85-na-r%C3%B3%C5%BCne-tematy-i-anga%C5%BCuj%C4%85-si%C4%99-w-dialog-z-kolorowymi-dymkami-gm1272447964-374717821 */}
        </div>
    )
}