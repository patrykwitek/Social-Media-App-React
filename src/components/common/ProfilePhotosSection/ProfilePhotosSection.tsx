import './style.scss';
import '../../../style/font.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { FetchPhotosForProfileSection } from '../../../hooks/API/FetchPhotosForProfileSection';

export const ProfilePhotosSection = () => {
    const { userID } = useParams();

    const {user, photosList} = FetchPhotosForProfileSection(userID);
    
    const navigate = useNavigate();

    return (
        <div className='profilePhotosSection'>
            {
                photosList[0] ? (
                photosList.map((photo: any) => {
                    return <img
                        key={photo.id}
                        src={photo.url}
                        alt="Photo"
                        className='userProfilePhotoSection-photo'
                        loading='lazy'
                    />
                })
                ) : (
                    <LoadingScreen />
                )
            }
            {user && user.name && (
                <React.Fragment>
                    <div className='show-users-gallery' onClick={() => navigate(`../../user/${userID}/gallery`)}>
                        Show {user.name.split(" ")[0]}'s gallery
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}