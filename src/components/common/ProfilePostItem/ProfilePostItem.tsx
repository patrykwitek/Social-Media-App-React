import './style.scss';
import '../../../style/font.css';
import { CommentsSection } from '../CommentsSection/CommentsSection';

type ProfilePostItemProps = {
    post: any
}

export const ProfilePostItem = (props: ProfilePostItemProps) => {
    return (
        <div className='single-post'>
            <div className='own-single-post'>
                <div className='single-post-description'>
                    <h3 className='single-post-title'>{props.post.title}</h3>
                    <div className='single-post-text'>
                        {props.post.body}
                    </div>
                </div>
            </div>
            <CommentsSection postId={props.post.id} />
        </div>
    )
}