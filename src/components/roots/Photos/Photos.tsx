import './style.scss';
import '../../../style/font.css';
import { Photo } from '../../common/Photo/Photo';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { FetchPhotos } from '../../../hooks/API/FetchPhotos';
import { AddButton } from '../../common/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';
import { PhotosSearchBar } from '../../common/PhotosSearchBar/PhotosSearchBar';
import { useState } from 'react';
import { PhotoType } from '../../../types/PhotoType';
import { PhotosSearchBarByAlbumID } from '../../common/PhotosSearchBarByAlbumID/PhotosSearchBarByAlbumID';
import { PhotosSearchBarByUserID } from '../../common/PhotosSearchBarByUserID/PhotosSearchBarByUser';
import { useTranslation } from 'react-i18next';

const Photos = () => {
    const [translation, i18n] = useTranslation("global");
    
    const { photosAPI } = FetchPhotos();
    const navigate = useNavigate();

    const [filterPhotos, setFilterPhotos] = useState<PhotoType[]>([]);
    const [searchInputPhotos, setSearchInputPhotos] = useState('');
    const [searchBarOption, setSearchBarOption] = useState('photoID');

    const handleSelectChange = (event: any) => {
        setSearchBarOption(event.target.value);
    };


    return (
        <div className='photosPage'>
            <div className='photos-search-bar-container'>
                <select className='choose-filtering' value={searchBarOption} onChange={handleSelectChange}>
                    <option value='photoID'>{translation("photoId")}</option>
                    <option value='albumID'>{translation("albumId")}</option>
                    <option value='userID'>{translation("userId")}</option>
                </select>
                {
                    searchBarOption == 'photoID' ? (
                        <PhotosSearchBar setSearchInput={setSearchInputPhotos} setFilterPhotos={setFilterPhotos} />
                    ) : (
                        searchBarOption == 'albumID' ? (
                            <PhotosSearchBarByAlbumID setSearchInput={setSearchInputPhotos} setFilterPhotos={setFilterPhotos} />
                        ) : (
                            <PhotosSearchBarByUserID setSearchInput={setSearchInputPhotos} setFilterPhotos={setFilterPhotos} />
                        )
                    )
                }
            </div>
            <div className='photosContent'>
                {
                    photosAPI[0] ? (
                        searchInputPhotos == '' ?
                            photosAPI.map((photo: PhotoType) => {
                                return <Photo key={photo.id} photo={photo} />
                            })
                            :
                            filterPhotos.map((photo: PhotoType) => {
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