import './style.scss';
import '../../../style/font.css';
import { RiLoginBoxLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

export const LoginBtn = () => {
    
    const navigate = useNavigate();

    return (
        <div className='login-btn-container'>
            <div className='headerLoginSection' onClick={() => navigate(`login`)}>
                Login <RiLoginBoxLine className='login-icon'/>
            </div>
        </div>
    )
}