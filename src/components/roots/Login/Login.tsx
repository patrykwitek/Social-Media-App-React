import './style.scss';
import '../../../style/font.css';
import { PiUserCircleFill } from "react-icons/pi";
import { RiLockPasswordFill, RiLoginBoxLine } from "react-icons/ri";
import { useState } from 'react';
import { useAuth } from '../../../hooks/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { FetchUsers } from '../../../hooks/API/FetchUsers';
import { useTranslation } from 'react-i18next';

export const Login = () => {
    const auth = useAuth();
    const [translation, i18n] = useTranslation("global");

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMessageVisibility, setPasswordMessageVisibility] = useState('none');
    const [wrongUsernameMessageVisibility, setWrongUsernameMessageVisibility] = useState('none');

    const navigate = useNavigate();

    const { allUsers } = FetchUsers();

    const displayPasswordAlert = () => {
        setPassword('');
        setPasswordMessageVisibility('block');
    }

    const handleLogin = () => {
        for (let i = 0; i < allUsers.length; i++) {
            if (allUsers[i].username.toLowerCase() == username.toLowerCase()) {
                auth.login(allUsers[i]);
                navigate('/', { replace: true });
                break;
            }
        }
        setWrongUsernameMessageVisibility('block');
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='username-container'>
                    <PiUserCircleFill className='username-icon' />
                    <input
                        type='text'
                        className='username-input'
                        placeholder={translation("login")}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div style={{ display: wrongUsernameMessageVisibility }} className='wrong-username-message'>
                    {translation("wrongUsernameMessage")}
                </div>
                <div className='password-container'>
                    <RiLockPasswordFill className='password-icon' />
                    <input
                        type='password'
                        className='password-input'
                        placeholder={translation("password")}
                        value={password}
                        onChange={displayPasswordAlert}
                    />
                </div>
                <div style={{ display: passwordMessageVisibility }} className='password-message'>
                    {translation("passwordInfo")}
                </div>
                <div className='login-button'>
                    <button onClick={handleLogin}>
                        {translation("loginBtn")} <RiLoginBoxLine className='login-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}