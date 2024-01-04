import './style.scss';
import '../../../style/font.css';
import { Post } from '../../common/Post/Post';

export const Posts = () => {
    return (
        <div className='postsPage'>
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    )
}