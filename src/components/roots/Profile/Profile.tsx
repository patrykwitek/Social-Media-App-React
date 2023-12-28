import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { ProfileNavigationItem } from '../../common/ProfileNavigationItem/ProfileNavigationItem';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';

export const Profile = () => {
    const { userID } = useParams();

    const [user, setUserData] = useState<any>({});

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`);
                const userData = await userResponse.json();
                setUserData(userData);
            } catch (error) {
                console.error('Fetching data failed: ', error);
            }
        };

        fetchUser();
    }, [userID]);

    return (
        <div className='userProfilePage'>
            {user && user.company && user.address && (
                <React.Fragment>
                    <div className='userProfileTopSection'>
                        <div className='userInfoSection'>
                            <div className='userProfileImgSection'>
                                <img src={profilePicture} alt="Profile Picture" />
                            </div>
                            <div className='userInfo'>
                                <div className='username'>
                                    {user.username}
                                </div>
                                <div className='userDignity'>
                                    {user.name}
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
                                Phone: {user.phone}
                            </div>
                            <div className='more-info-webside'>
                                Webside: <a href={`https://${user.website}`} target='_blank'>{user.website}</a>
                            </div>
                            <div className='more-info-company'>
                                Company: {user.company.name}
                            </div>
                        </div>
                        <div className='userBottomData'>
                            <div>
                                Mail: {user.email}
                            </div>
                            <div>
                                Address: {user.address.street} {user.address.suite}
                            </div>
                            <div>
                                City: {user.address.city} {user.address.zipcode}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}