import './style.scss';
import '../../../style/font.css';
import { IoSend } from "react-icons/io5";
import { useState } from 'react';
import { useAuth } from '../../../hooks/Auth/Auth';
import { FetchPosts } from '../../../hooks/API/FetchPosts';

export const AddComment = () => {
   const auth = useAuth();

   const [postTitle, setPostTitle] = useState<string>('');
   const [postBody, setPostBody] = useState<string>('');

   const isValid: boolean = (postTitle != '') && (postBody != '');

   const userID: string = auth.user?.id?.toString() || '';

   const { postsApi } = FetchPosts();

   const handleSubmit = () => {

      if (isValid) {
         fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
               userId: userID,
               id: postsApi.length + 1,
               title: postTitle,
               body: postBody
            }),
            headers: {
               'Content-type': 'application/json; charset=UTF-8',
            },
         })
            .then((response) => response.json())
            .then((json) => console.log(json));

         setPostTitle('');
         setPostBody('');

         const titleField: HTMLInputElement | null = document.querySelector('.title-field');
         const bodyField: HTMLInputElement | null = document.querySelector('.body-field');

         if(titleField !== null){
            titleField.value = '';
         }

         if(bodyField !== null){
            bodyField.value = '';
         }
      }
   }

   return (
      <div className='addComment'>
         <div className='createComments'>
            <span className='create-comment-header'>Add a comment</span>
            <input type="text" placeholder="Name..." onChange={(event) => setPostTitle(event.target.value)} className='title-field' />
            <input type="text" placeholder="Body..." onChange={(event) => setPostBody(event.target.value)} className='body-field' />
            <IoSend className='icon-send' onClick={handleSubmit} />
         </div>
      </div>
   );
}