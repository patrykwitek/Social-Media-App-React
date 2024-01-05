import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { FetchPhotos } from '../../../hooks/API/FetchPhotos';
import { AddButton } from '../../common/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';
import { PhotosSearchBar } from '../../common/PhotosSearchBar/PhotosSearchBar';
import { useState } from 'react';
import { PhotosSearchBarByAlbumID } from '../../common/PhotosSearchBarByAlbumID/PhotosSearchBarByAlbumID';

const Photos = () => {
    const { photosAPI } = FetchPhotos();
    const navigate = useNavigate();

    const [filterPhotos, setFilterPhotos] = useState<{}[]>([]);
    const [searchInputPhotos, setSearchInputPhotos] = useState('');
    const [searchBarOption, setSearchBarOption] = useState('photoID');

    const handleSelectChange = (event: any) => {
        setSearchBarOption(event.target.value);
    };


    return (
        <div className='photosPage'>
            <div className='photos-search-bar-container'>
                {
                    searchBarOption == 'photoID' ? (
                        <PhotosSearchBar setSearchInput={setSearchInputPhotos} setFilterPhotos={setFilterPhotos} />
                    ) : (
                        <PhotosSearchBarByAlbumID setSearchInput={setSearchInputPhotos} setFilterPhotos={setFilterPhotos} />
                    )
                }
                <select className='choose-filtering' value={searchBarOption} onChange={handleSelectChange}>
                    <option value='photoID'>photo ID</option>
                    <option value='albumID'>album ID</option>
                </select>
            </div>
            <div className='photosContent'>
                {
                    photosAPI[0] ? (
                        searchInputPhotos == '' ?
                            photosAPI.map((photo: any) => {
                                return <Photo key={photo.id} photo={photo} />
                            })
                            :
                            filterPhotos.map((photo: any) => {
                                return <Photo key={photo.id} photo={photo} />
                            })
                    ) : (
                        <LoadingScreen />
                    )
                }
            </div>
            <AddButton onClick={() => navigate('/add-photo')} />
        </div>
    )
}

export default Photos;