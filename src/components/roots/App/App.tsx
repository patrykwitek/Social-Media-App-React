import '../../../style/font.css';
import './style.scss';
import {Routes, Route} from 'react-router-dom';
import { Footer } from '../../common/Footer/Footer';
import { Header } from '../../common/Header/Header';
import { About } from '../About/About';
import { Photos } from '../Photos/Photos';
import { ToDoS } from '../ToDos/ToDos';
import { Posts } from '../Posts/Posts';
import { Settings } from '../Settings/Settings';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Profile } from '../Profile/Profile';
import { ProfilePhotosSection } from '../../common/ProfilePhotosSection/ProfilePhotosSection';
import { ProfilePostsSection } from '../../common/ProfilePostsSection/ProfilePostsSection';

function App(){
  return (
    <div className="app">
      <Header isLoggedIn={true}/>
      <Routes>
        <Route path='/' element={<Photos />}/>
        <Route path='posts' element={<Posts />}/>
        <Route path='ToDoS' element={<ToDoS />}/>
        <Route path='about' element={<About />}/>
        <Route path='profile' element={<Profile />}>
          <Route path='profilePhotos' element={<ProfilePhotosSection />}/>
          <Route path='profilePosts' element={<ProfilePostsSection />}/>
        </Route>
        <Route path='settings' element={<Settings />}/>
        <Route path='user' element={<Profile />}>
          <Route path='profilePhotos' element={<ProfilePhotosSection />}/>
          <Route path='profilePosts' element={<ProfilePostsSection />}/>
        </Route>
        <Route path='*' element={<PageNotFound />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;