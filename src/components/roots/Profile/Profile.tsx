import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { ProfileNavigationItem } from '../../common/ProfileNavigationItem/ProfileNavigationItem';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { FetchUserData } from '../../../hooks/API/FetchUserData';
import { useTranslation } from 'react-i18next';

export const Profile = () => {
    const [translation, i18n] = useTranslation("global");

    const { userID } = useParams();
    const { user } = FetchUserData(userID);

    return (
        <div className='userProfilePage'>
            {user && user.company && user.address && (
                <React.Fragment>
                    <div className='userProfileTopSection'>
                        <div className='userInfoSection'>
                            <div className='userProfileImgSection'>
                                <img src={profilePicture} alt={translation("profilePicture")} />
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
                                <NavLink to='photos' className='profileNavigationLink'><ProfileNavigationItem name={translation("photos")} /></NavLink>
                                <NavLink to='posts' className='profileNavigationLink'><ProfileNavigationItem name={translation("posts")} /></NavLink>
                                <NavLink to='gallery' className='profileNavigationLink'><ProfileNavigationItem name={translation("gallery")} /></NavLink>
                            </div>
                        </div>
                    </div>
                    <div className='userProfileChosenItem'>
                        <Outlet />
                    </div>
                    <div className='userProfileMoreInfo'>
                        <div className='more-info-title'>
                            {translation("moreInfo")}:
                        </div>
                        <div className='more-info-content'>
                            <div className='more-info-telephone'>
                                {translation("phone")}: {user.phone}
                            </div>
                            <div className='more-info-webside'>
                                {translation("website")}: <a href={`https://${user.website}`} target='_blank'>{user.website}</a>
                            </div>
                            <div className='more-info-company'>
                                {translation("company")}: {user.company.name}
                            </div>
                        </div>
                        <div className='userBottomData'>
                            <div>
                                {translation("email")}: {user.email}
                            </div>
                            <div>
                                {translation("address")}: {user.address.street} {user.address.suite}
                            </div>
                            <div>
                                {translation("city")}: {user.address.city} {user.address.zipcode}
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}