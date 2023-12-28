import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { ProfileNavigationItem } from '../../common/ProfileNavigationItem/ProfileNavigationItem';
import { NavLink, Outlet, useParams } from 'react-router-dom';

export const Profile = () => {
    const { userID } = useParams();

    return (
        <div className='userProfilePage'>
            <div className='userProfileTopSection'>
                <div className='userInfoSection'>
                    <div className='userProfileImgSection'>
                        <img src={profilePicture} alt="Profile Picture" />
                    </div>
                    <div className='userInfo'>
                        <div className='username'>
                            patrykwitek
                        </div>
                        <div className='userDignity'>
                            Patryk Witek
                        </div>
                    </div>
                </div>
                <div className='userProfileMainConent'>
                    <div className='userProfileNavigation'>
                        <NavLink to='photos' className='profileNavigationLink'><ProfileNavigationItem name='Photos' /></NavLink>
                        <NavLink to='posts' className='profileNavigationLink'><ProfileNavigationItem name='Posts' /></NavLink>
                    </div>
                </div>
            </div>
            <div className='userProfileChosenItem'>
                <Outlet />
            </div>
            <div className='userProfileMoreInfo'>
                <div className='more-info-title'>
                    More info:
                </div>
                <div className='more-info-content'>
                    <div className='more-info-telephone'>
                        tel. 123 456 789
                    </div>
                    <div className='more-info-webside'>
                        Webside: <a href='#'>patryk.com</a>
                    </div>
                    <div className='more-info-company'>
                        Company: Company Name
                    </div>
                </div>
                <div className='userBottomData'>
                    <div>
                        Mail: patrykwitek@mail.com
                    </div>
                    <div>
                        Address: Przykładowa 43 St.
                    </div>
                    <div>
                        City: Cracow, 12-345
                    </div>
                </div>
            </div>
        </div>
    )
}