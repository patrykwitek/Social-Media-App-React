import './style.scss';
import '../../../style/font.css';
import { GoFileDirectory } from "react-icons/go";
import { useAuth } from '../../../hooks/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { FetchPosts } from '../../../hooks/API/FetchPosts';
import { SubmitButton } from '../../common/SubmitButton/SubmitButton';

export const AddPost = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    const [postTitle, setPostTitle] = useState<string>('');
    const [postDescription, setPostDescription] = useState<string>('');

    const isValid: boolean = (postTitle != null) && (postDescription != null);

    const { postsApi } = FetchPosts();

    const handleSubmit = () => {

        if (isValid) {
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    id: postsApi.length + 1,
                    title: postTitle,
                    description: postDescription
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => console.log(json));

            navigate(`/user/${auth.user?.id}/posts`);
        }
    }

    return (
        <div className='add-post-page'>
            <div className='add-post-container'>
                <div className='title-section'>
                    Add Post
                    <GoFileDirectory className='icon' />
                </div>
                <div className='form-section'>
                    <div className='post-title'>
                        Title:
                        <input
                            type='text'
                            placeholder='Title'
                            className='search-input'
                            value={postTitle}
                            onChange={(event) => setPostTitle(event.target.value)}
                        />
                    </div>
                    <div className='post-description'>
                        Description:
                        <input
                            type='text'
                            placeholder='Description'
                            className='search-input'
                            value={postDescription}
                            onChange={(event) => setPostDescription(event.target.value)}
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