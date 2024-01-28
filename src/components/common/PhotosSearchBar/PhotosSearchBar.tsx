import './style.scss';
import '../../../style/font.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { PhotoType } from '../../../types/PhotoType';
import { useTranslation } from 'react-i18next';

type PhotosSearchBarProps = {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    setFilterPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>
}

export const PhotosSearchBar = (props: PhotosSearchBarProps) => {
    const [translation, i18n] = useTranslation("global");
    
    const [input, setInput] = useState('');

    const fetchFilteredPhotosData = (value: string) => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then((photoData: any[]) => {
                const filteredPhotos = photoData.filter(photo => {
                    return (
                        photo && photo.id && photo.id == value
                    );
                });
                props.setFilterPhotos(filteredPhotos);
            })
            .catch(error => {
                console.error('Fetching data failed: ', error);
            });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
        props.setSearchInput(event.target.value);
        fetchFilteredPhotosData(event.target.value);
    };

    return (
        <div className="photos-search-bar">
            <FaSearch className='search-icon' />
            <input
                type='text'
                placeholder={translation("searchByPhotoIDPlaceholder")}
                className='search-input'
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}