import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { FetchPhotos } from '../../../hooks/API/FetchPhotos';
import { AddButton } from '../../common/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';

const Photos = () => {
    const { photosAPI } = FetchPhotos();
    const navigate = useNavigate();
    
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
            <AddButton onClick={() => navigate('/add-photo')}/>
        </div>
    )
}

export default Photos;