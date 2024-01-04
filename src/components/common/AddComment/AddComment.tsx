import './style.scss';
import '../../../style/font.css';

export const AddComment = () => {
   return (
      <div className='addComment'>
         <div className='createComments'>
            <input type="text" placeholder="Add a comment... ." />
         </div>
      </div>
   );
}