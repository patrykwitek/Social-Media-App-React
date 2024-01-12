import './style.scss';
import '../../../style/font.css';
import { Post } from '../../common/Post/Post';
import { FetchPosts } from '../../../hooks/API/FetchPosts';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { AddButton } from '../../common/AddButton/AddButton';
import { useNavigate } from 'react-router-dom';

export const Posts = () => {
   const { postsApi } = FetchPosts();
   const navigate = useNavigate();

   return (
      <div className='postsPage'>
         {
            postsApi[0] ? (
               postsApi.map((post: any, id: number) => {
                  return <Post key={post.id} post={post} />
               })
            ) : (
               <LoadingScreen />
            )
         }

         <AddButton onClick={() => navigate('/add-post')} />
      </div>
   )
}