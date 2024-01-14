import './style.scss';
import '../../../style/font.css';
import { CommentsSection } from '../CommentsSection/CommentsSection';
import { MdDelete } from "react-icons/md";
import { useAuth } from '../../../hooks/Auth/Auth';

type ProfilePostItemProps = {
    post: any
}

export const ProfilePostItem = (props: ProfilePostItemProps) => {
    const auth = useAuth();

    const handleRemovePost = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.post.id}`, {
            method: 'DELETE'
        });
    }

    return (
        <div className='single-post'>
            <div className='own-single-post'>
                <div className='single-post-description'>

                    <h3 className='single-post-title'>{props.post.title}{
                        auth.user?.id == props.post.userId ? (
                            <div className='icon-delete' onClick={handleRemovePost}>
                                <MdDelete />
                            </div>
                        ) : (
                            ''
                        )
                    }</h3>
                    <div className='single-post-text'>
                        {props.post.body}
                    </div>
                </div>
            </div>
            <CommentsSection postId={props.post.id} />
        </div>
    )
}