import './style.scss';
import '../../../style/font.css';
import profilePicture from '../../../resources/images/profile-picture.png';
import { Comment } from '../Comment/Comment';
import { useState } from 'react';
import { AddComment } from '../AddComment/AddComment';
import { FaRegCommentDots } from "react-icons/fa";


// type PostProps = {
//    post: any,
// };


export const Post = () => {

   const [showMore, setShowMore] = useState(false);

   return (
      <div className='postsPage'>
         <div className='somePost'>
            <div className='topPartOfPost'>
               <div className='userPost'>
                  <div>
                     <img src={profilePicture} alt="profilePicture" className='profilePicture' />
                  </div>
                  <div className='userPostUsername'>
                     Patryk Witek
                  </div>
               </div>

            </div>
            <div className='bottomPartOfPost'>
               <div className='postDescription'>
                  <div className='postTitle'>
                     Lorem
                  </div>
                  <div className='postText'>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis aut modi, expedita molestiae cum porro possimus, natus tenetur assumenda recusandae quis ratione quas et delectus nisi minima sunt vitae? Voluptas!
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat consectetur eius repellat! Minima veniam itaque ad molestiae, minus officia blanditiis molestias pariatur provident, explicabo magnam adipisci quidem placeat saepe. Facere?
                  </div>
               </div>
            </div>

            <div className={`actionPartOfPost ${showMore ? 'showComments' : 'stoppedShowing'}`}>
               <AddComment />
               <Comment />
               <Comment />
               <Comment />
            </div>

            <div className='closeComments' onClick={() => { setShowMore(!showMore) }}>
               {showMore ? <FaRegCommentDots /> : <FaRegCommentDots />}
            </div>

         </div>
      </div>
   )
}