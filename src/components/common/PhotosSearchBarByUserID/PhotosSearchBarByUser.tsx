import './style.scss';
import '../../../style/font.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { PhotoType } from '../../../types/PhotoType';
import { Album } from '../../../types/Album';
import { useTranslation } from 'react-i18next';

type PhotosSearchBarByUserIDProps = {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    setFilterPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>
}

export const PhotosSearchBarByUserID = (props: PhotosSearchBarByUserIDProps) => {
    const [translation, i18n] = useTranslation("global");
    
    const [input, setInput] = useState('');

    const fetchFilteredPhotosData = async (value: string) => {
        props.setFilterPhotos([]);

        try {
            const albumsResponse = await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${value}`);
            const userData: Album[] = await albumsResponse.json();

            let fetchedPhotos: PhotoType[] = [];

            for (const album of userData) {
                const photosResponse = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
                const photoData: PhotoType[] = await photosResponse.json();
                fetchedPhotos = [...fetchedPhotos, ...photoData];
            }

            const displayedPhotosNumber: number = 100;
            props.setFilterPhotos(fetchedPhotos.slice(0, displayedPhotosNumber));
        } catch (error) {
            console.error('Fetching data failed: ', error);
        }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        props.setSearchInput(event.target.value);
        fetchFilteredPhotosData(event.target.value);
    };

    return (
        <div className="photos-search-bar-by-user-id">
            <FaSearch className='search-icon' />
            <input
                type='text'
                placeholder={translation("searchByUserIDPlaceholder")}
                className='search-input'
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}