import './style.scss';
import '../../../style/font.css';

type ProfilePostItemProps = {
    post: any
}

export const ProfilePostItem = (props: ProfilePostItemProps) => {
    return (
        <div className='single-post'>
            <h3 className='single-post-title'>{props.post.title}</h3>
            <div className='single-post-text'>
                {props.post.body}
            </div>
        </div>
    )
}