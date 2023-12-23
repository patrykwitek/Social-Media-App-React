import '../../../style/font.css';
import './style.scss';
import {Routes, Route} from 'react-router-dom';
import { Footer } from '../../common/Footer/Footer';
import { Header } from '../../common/Header/Header';
import { About } from '../About/About';
import { Photos } from '../Photos/Photos';
import { ToDoS } from '../ToDos/ToDos';
import { Posts } from '../Posts/Posts';

function App(){
  return (
    <div className="app">
      <Header isLoggedIn={true}/>
      <Routes>
        <Route path='/' element={<Photos />}/>
        <Route path='/posts' element={<Posts />}/>
        <Route path='/ToDoS' element={<ToDoS />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;