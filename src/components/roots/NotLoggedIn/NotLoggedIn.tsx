import './style.scss';
import '../../../style/font.css';
import { MdLock } from "react-icons/md";
import { RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const NotLoggedIn = () => {
    const [translation, i18n] = useTranslation("global");

    const navigate = useNavigate();

    return (
        <div className='not-logged-in-page'>
            <div className='not-logged-in-container'>
                <MdLock className='lock-icon' />
                <h1>{translation("notLoggedIn")}</h1>
                <p>
                    {translation("notLoggedInMessage1")}
                </p>
                <p className='message-content'>
                    {translation("notLoggedInMessage2")}
                </p>
                <div className='login-button'>
                    <button onClick={() => navigate('/login')}>
                        {translation("loginBtn")} <RiLoginBoxLine className='login-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}