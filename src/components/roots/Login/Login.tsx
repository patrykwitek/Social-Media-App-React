import './style.scss';
import '../../../style/font.css';
import { PiUserCircleFill } from "react-icons/pi";
import { RiLockPasswordFill, RiLoginBoxLine } from "react-icons/ri";
import { useState } from 'react';
import { useAuth } from '../../../hooks/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { FetchUsers } from '../../../hooks/API/FetchUsers';

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordMessageVisibility, setPasswordMessageVisibility] = useState('none');

    const auth = useAuth();
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
                navigate('/', {replace: true});
                break;
            }
        }
    }

    return (
        <div className='login-page'>
            <div className='login-container'>
                <div className='username-container'>
                    <PiUserCircleFill className='username-icon' />
                    <input
                        type='text'
                        className='username-input'
                        placeholder='login'
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </div>
                <div className='password-container'>
                    <RiLockPasswordFill className='password-icon' />
                    <input
                        type='password'
                        className='password-input'
                        placeholder='password'
                        value={password}
                        onChange={displayPasswordAlert}
                    />
                </div>
                <div style={{ display: passwordMessageVisibility }} className='password-message'>
                    Info: Password functionality is unable due to missing password field in JSON Placeholder API. Just enter existing username to log in.
                </div>
                <div className='login-button'>
                    <button onClick={handleLogin}>
                        Log In <RiLoginBoxLine className='login-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}