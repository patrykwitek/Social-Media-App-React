import './style.scss';
import '../../../style/font.css';
import { RiLoginBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export const LoginBtn = () => {
    const [translation, i18n] = useTranslation("global");

    const navigate = useNavigate();

    return (
        <div className='login-btn-container'>
            <div className='headerLoginSection' onClick={() => navigate(`login`)} title={translation("login")}>
                <span className='login-text'>{translation("login")}</span> <RiLoginBoxLine className='login-icon' />
            </div>
        </div>
    )
}