import '../../style/photos.css';
import '../../style/font.css';

type PhotoProps = {
   userName: string
}

export const Photo = (props: PhotoProps) => {
   return (
      <div className='somePhoto'>
         <div className='leftPartOfPhoto'>
            <div className='userPhoto'>
               <img src={require("../../resources/images/profile-picture.png")} alt="profilePicture" className='profilePicture' />
               <a href='#' className='userPhotoName'>{props.userName}</a>
            </div>
            <div className='photoDescription'>
               <div className='photoDescriptionElement'>
                  <div>Album name:</div>
                  <a className='albumNameLink'>Góry</a>
               </div>
               <div className='photoDescriptionElement'>
                  <div>Photo name:</div>
                  <a className='photoNameLink'>zdjecie1</a>
               </div>
            </div>
         </div>
         <div className='rightPartOfPhoto'>
            <img src="https://via.placeholder.com/600/24f355" alt="sample photo" className='displayedPhoto' />
         </div>
      </div>
   )
}