import './style.scss';
import '../../../style/font.css';
import welcomePagePicture from '../../../resources/images/welcome-page-picture.png';
import { useNavigate } from 'react-router-dom';
import { RiLoginBoxLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

export const Welcome = () => {
    const [translation, i18n] = useTranslation("global");

    const navigate = useNavigate();

    return (
        <div className='welcome-page'>
            <div className='welcome-page-top'>
                <p>
                    {translation("welcomePageMessage1")}
                </p>
                <p>
                    {translation("welcomePageMessage2")}
                </p>
                <p id='bottom-description'>
                    {translation("welcomePageMessage3")}
                </p>
            </div>
            <div className='welcome-page-login'>
                <button onClick={() => navigate('/login')}>
                    {translation("startExploring")} <RiLoginBoxLine className='login-icon' />
                </button>
            </div>
            <img src={welcomePagePicture} alt={translation("profilePicture")} className='welcome-page-picture' />
            {/* link to welcome page picture(free license): https://www.istockphoto.com/pl/wektor/ludzie-dyskutuj%C4%85-na-r%C3%B3%C5%BCne-tematy-i-anga%C5%BCuj%C4%85-si%C4%99-w-dialog-z-kolorowymi-dymkami-gm1272447964-374717821 */}
        </div>
    )
}