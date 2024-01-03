import './style.scss';
import '../../../style/font.css';
import { HiOutlinePhoto } from "react-icons/hi2";
import { SubmitButton } from '../../common/SubmitButton/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/Auth/Auth';
import Select from 'react-select';
import { FetchUsersAlbums } from '../../../hooks/API/FetchUsersAlbums';
import { useState } from 'react';
import { FetchPhotos } from '../../../hooks/API/FetchPhotos';

export const AddPhoto = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [photoTitle, setPhotoTitle] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [selectedAlbum, setSelectedAlbum] = useState<any>(null);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        setSelectedFile(file || null);
    };

    const userID: string = auth.user?.id?.toString() || '';
    const { albums } = FetchUsersAlbums(userID);

    const albumOptions: any = albums.map(album => ({
        value: album.id.toString(),
        label: album.title
    }));

    const isValid: boolean = (selectedFile != null) && (photoTitle != null) && (selectedAlbum != null);

    const {photosAPI} = FetchPhotos();
    
    const handleSubmit = () => {

        if (isValid) {
            fetch('https://jsonplaceholder.typicode.com/photos', {
                method: 'POST',
                body: JSON.stringify({
                    albumId: selectedAlbum.value,
                    id: photosAPI.length + 1,
                    title: photoTitle,
                    url: selectedFile?.name,
                    thumbnailUrl: selectedFile?.name
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            navigate(`/user/${auth.user?.id}/photos`);
        }
    }

    return (
        <div className='add-photo-page'>
            <div className='add-photo-container'>
                <div className='title-section'>
                    Add Photo
                    <HiOutlinePhoto className='icon' />
                </div>
                <div className='form-section'>
                    <div className='photo-title'>
                        Title:
                        <input
                            type='text'
                            placeholder='Title'
                            className='search-input'
                            value={photoTitle}
                            onChange={(event) => setPhotoTitle(event.target.value)}
                        />
                    </div>
                    <div className='choose-photo'>
                        <div>
                            Choose photo:
                        </div>
                        <input
                            type="file"
                            name="img"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='choose-album'>
                        Choose album:
                        <Select
                            options={albumOptions}
                            className='select-option-album'
                            value={selectedAlbum}
                            onChange={(selectedOption) => setSelectedAlbum(selectedOption)}
                        />
                    </div>
                </div>
                <div className='submit-button-section'>
                    <SubmitButton onClick={handleSubmit} />
                </div>
            </div>
        </div>
    )
}