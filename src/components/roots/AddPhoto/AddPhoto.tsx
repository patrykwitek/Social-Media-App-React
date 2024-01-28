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
import { useTranslation } from 'react-i18next';

export const AddPhoto = () => {
    const auth = useAuth();
    const [translation, i18n] = useTranslation("global");

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

    const { photosAPI } = FetchPhotos();

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
                    {translation("addPhoto")}
                    <HiOutlinePhoto className='icon' />
                </div>
                <div className='form-section'>
                    <div className='photo-title'>
                        {translation("title")}:
                        <input
                            type='text'
                            placeholder={translation("title")}
                            className='search-input'
                            value={photoTitle}
                            onChange={(event) => setPhotoTitle(event.target.value)}
                        />
                    </div>
                    <div className='choose-photo'>
                        <div>
                            {translation("choosePhoto")}:
                        </div>
                        <input
                            type="file"
                            name="img"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className='choose-album'>
                        {translation("chooseAlbum")}:
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