import './style.scss';
import '../../../style/font.css';
import { PulseLoader } from 'react-spinners';

export const LoadingScreen = () => {
    return (
        <div className='loading-screen'>
            <PulseLoader color='rgb(47, 47, 47)'/>
        </div>
    )
}