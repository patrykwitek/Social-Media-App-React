import './style.scss';
import '../../../style/font.css';
import { useAuth } from '../../../hooks/Auth/Auth';
import { Welcome } from '../Welcome/Welcome';
import React, { Suspense } from 'react';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
const Photos = React.lazy(() => import('../Photos/Photos'))

export const MainPage = () => {
    const auth = useAuth();
    
    return (
        !auth.user ? (
            <Welcome />
        ) : (
            <Suspense fallback={<LoadingScreen />}>
                <Photos />
            </Suspense>
        )
    )
}