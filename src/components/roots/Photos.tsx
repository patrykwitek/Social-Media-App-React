import '../../style/photos.css';
import '../../style/font.css';
import { Photo } from './Photo';

export const Photos = () => {
    return (
        <div className='photosPage'>
            <Photo userName='patryk' />
            <Photo userName='ruslan' />
            <Photo userName='ihorLIAN' />
        </div>
    )
}