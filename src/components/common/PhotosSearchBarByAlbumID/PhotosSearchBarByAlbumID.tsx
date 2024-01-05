import './style.scss';
import '../../../style/font.css';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';
import { PhotoType } from '../../../types/PhotoType';

type PhotosSearchBarByAlbumIDProps = {
    setSearchInput: React.Dispatch<React.SetStateAction<string>>,
    setFilterPhotos: React.Dispatch<React.SetStateAction<PhotoType[]>>
}

export const PhotosSearchBarByAlbumID = (props: PhotosSearchBarByAlbumIDProps) => {
    const [input, setInput] = useState('');

    const fetchFilteredPhotosData = (value: string) => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then(response => response.json())
            .then((photoData: any[]) => {
                const filteredPhotos = photoData.filter(photo => {
                    return (
                        photo && photo.albumId && photo.albumId == value
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
        <div className="photos-search-bar-by-album-id">
            <FaSearch className='search-icon' />
            <input
                type='text'
                placeholder='Search for the photos by'
                className='search-input'
                value={input}
                onChange={handleInputChange}
            />
        </div>
    )
}