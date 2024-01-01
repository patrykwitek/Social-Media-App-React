import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { FetchPhotos } from '../../../hooks/API/FetchPhotos';

const Photos = () => {
    const { photosAPI } = FetchPhotos();
    
    return (
        <div className='photosPage'>
            <div className='photosContent'>
                {
                    photosAPI[0] ? (
                        photosAPI.map((photo: any, id: number) => {
                            return <Photo key={photo.id} photo={photo} />
                        })
                    ) : (
                        <LoadingScreen />
                    )
                }
            </div>
        </div>
    )
}

export default Photos;