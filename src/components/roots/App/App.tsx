import '../../../style/font.css';
import './style.scss';
import React, { Suspense, useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Footer } from '../../common/Footer/Footer';
import { Header } from '../../common/Header/Header';
import { About } from '../About/About';
import { Friends } from '../Friends/Friends';
import { Posts } from '../Posts/Posts';
import { Settings } from '../Settings/Settings';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Profile } from '../Profile/Profile';
import { ProfilePhotosSection } from '../../common/ProfilePhotosSection/ProfilePhotosSection';
import { ProfilePostsSection } from '../../common/ProfilePostsSection/ProfilePostsSection';
import { UsersPhotosGallery } from '../../common/UsersPhotosGallery/UsersPhotosGallery';
import { Album } from '../../common/Album/Album';
import { LoadingScreen } from '../../common/LoadingScreen/LoadingScreen';
import { AuthProvider } from '../../../hooks/Auth/Auth';
import { Login } from '../Login/Login';
import { NotLoggedIn } from '../NotLoggedIn/NotLoggedIn';
import { RequireAuth } from '../../../hooks/Auth/RequireAuth';
import { MainPage } from '../MainPage/MainPage';
import { EditUser } from '../EditUser/EditUser';
import { AddPhoto } from '../AddPhoto/AddPhoto';
import { AddPost } from '../AddPost/AddPost';

function App() {
  const [displayMode, setDisplayMode] = useState('light');

  useEffect(() => {
    const displayedModeData = localStorage.getItem('displayMode');

    if (displayedModeData) {
      try {
        const parsedDisplayModeData = JSON.parse(displayedModeData);
        setDisplayMode(parsedDisplayModeData);

        if (displayMode == 'light') {
          document.body.style.backgroundColor = 'rgb(18, 8, 43)';
        }
        else if (displayMode == 'dark') {
          document.body.style.backgroundColor = 'rgb(244, 244, 244)';
        }
      } catch (error) {
        console.error('Parsing data from local storage error:', error);
      }
    }
  }, []);

  const changeDisplayMode = () => {
    const newMode = displayMode === 'light' ? 'dark' : 'light';
    setDisplayMode(newMode);

    if (displayMode == 'light') {
      document.body.style.backgroundColor = 'rgb(18, 8, 43)';
    }
    else if (displayMode == 'dark') {
      document.body.style.backgroundColor = 'rgb(244, 244, 244)';
    }
  };

  return (
    <div className="app" id={displayMode}>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='posts' element={<RequireAuth><Posts /></RequireAuth>} />
          <Route path='friends' element={<RequireAuth><Friends /></RequireAuth>} />
          <Route path='about' element={<About />} />
          <Route path='settings' element={<RequireAuth><Settings changeDisplayMode={changeDisplayMode} /></RequireAuth>} />
          <Route path='user/:userID' element={<RequireAuth><Profile /></RequireAuth>}>
            <Route index element={<ProfilePhotosSection />} />
            <Route path='photos' element={<ProfilePhotosSection />} />
            <Route path='gallery' element={<UsersPhotosGallery />} />
            <Route path='posts' element={<ProfilePostsSection />} />
          </Route>
          <Route path='album/:albumID' element={<RequireAuth><Album /></RequireAuth>} />
          <Route path='edit-user' element={<RequireAuth><EditUser /></RequireAuth>} />
          <Route path='add-photo' element={<RequireAuth><AddPhoto /></RequireAuth>} />
          <Route path='add-post' element={<RequireAuth><AddPost /></RequireAuth>} />
          <Route path='login' element={<Login />} />
          <Route path='not-logged-in' element={<NotLoggedIn />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;