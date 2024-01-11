import './style.scss';
import '../../../style/font.css';
import { Post } from '../../common/Post/Post';
import { FetchPosts } from '../../../hooks/API/FetchPosts';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';

export const Posts = () => {
   const { postsApi } = FetchPosts();

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
      </div>
   )
}