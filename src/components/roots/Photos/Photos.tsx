import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';

export const Photos = () => {
    return (
        <div className='photosPage'>
            <div className='photosContent'>
                <Photo userID={1} />
                <Photo userID={2} />
                <Photo userID={3} />
            </div>
        </div>
    )
}