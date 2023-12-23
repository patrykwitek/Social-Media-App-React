import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';

export const Photos = () => {
    return (
        <div className='photosPage'>
            <div className='photosContent'>
                <Photo userName='patryk' />
                <Photo userName='ruslan' />
                <Photo userName='ihor' />
            </div>
        </div>
    )
}