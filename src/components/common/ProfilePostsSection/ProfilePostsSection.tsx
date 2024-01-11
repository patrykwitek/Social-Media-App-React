import './style.scss';
import '../../../style/font.css';
import { ProfilePostItem } from '../ProfilePostItem/ProfilePostItem';
import { useParams } from 'react-router-dom';
import { FetchPostsForProfileSection } from '../../../hooks/API/FetchPostsForProfileSection';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';

export const ProfilePostsSection = () => {
    const { userID } = useParams();

    const { postsList } = FetchPostsForProfileSection(userID);

    return (
        <div className='profilePostsSection'>
            {
                postsList[0] ? (
                    postsList.map((post: any) => {
                        return <ProfilePostItem key={post.id} post={post} />
                    })
                ) : (
                    <LoadingScreen />
                )
            }
        </div>
    )
}