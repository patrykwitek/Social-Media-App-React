import './style.scss';
import '../../../style/font.css';
import { IoSend } from "react-icons/io5";

export const AddComment = () => {
   return (
      <div className='addComment'>
         <div className='createComments'>
            <input type="text" placeholder="Add a comment... ." />
            <IoSend className='icon-send' />
         </div>
      </div>
   );
}