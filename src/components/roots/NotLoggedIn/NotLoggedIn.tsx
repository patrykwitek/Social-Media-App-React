import './style.scss';
import '../../../style/font.css';
import { MdLock } from "react-icons/md";
import { RiLoginBoxLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export const NotLoggedIn = () => {
    const navigate = useNavigate();
    
    return (
        <div className='not-logged-in-page'>
            <div className='not-logged-in-container'>
                <MdLock className='lock-icon'/>
                <h1>Not Logged In</h1>
                <p>
                    It looks like you're trying to access a page you can't access. 
                </p>
                <p className='message-content'>
                    Log in to view content.
                </p>
                <div className='login-button'>
                    <button onClick={() => navigate('/login')}>
                        Log In <RiLoginBoxLine className='login-icon' />
                    </button>
                </div>
            </div>
        </div>
    )
}