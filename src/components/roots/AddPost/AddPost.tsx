import './style.scss';
import '../../../style/font.css';
import { GoFileDirectory } from "react-icons/go";

export const AddPost = () => {
    return (
        <div className='add-post-page'>
            <div className='add-post-container'>
                <div className='title-section'>
                    Add Post
                    <GoFileDirectory className='icon'/>
                </div>
            </div>
        </div>
    )
}