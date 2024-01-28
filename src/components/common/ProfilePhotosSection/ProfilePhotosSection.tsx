import './style.scss';
import '../../../style/font.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import React from 'react';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { FetchPhotosForProfileSection } from '../../../hooks/API/FetchPhotosForProfileSection';
import { useTranslation } from 'react-i18next';

export const ProfilePhotosSection = () => {
    const [translation, i18n] = useTranslation("global");
    
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
                        alt={translation("photo")}
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
                        {translation("show")} {user.name.split(" ")[0]}{translation("sGallery")}
                    </div>
                </React.Fragment>
            )}
        </div>
    )
}