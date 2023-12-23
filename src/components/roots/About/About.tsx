import './style.scss';
import '../../../style/font.css';

export const About = () => {
    return (
        <div className='aboutPage'>
            <div className='projectInfo'>
                <h3>That is React Project which uses Placeholder API as data. On this page user can log in if exists, watch photos of other users & checks his ToDo'S.</h3>
                <p>TODO: finish with screenshots, description etc. in the future</p>
            </div>
            <div className='authors'>
                <h3 className='authorsTitle'>Authors</h3>
                <div className='authorsContent'>
                    <a href="https://www.linkedin.com/in/patryk-witek-38272323b/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/patrykwitek.png")} alt="First Author" className='authorPicture' id='patrykPhoto'/>
                            <span className='authorName'>Patryk Witek</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo' />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ruslan-pidhainyi/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/ruslanpidhainyi.png")} alt="First Author" className='authorPicture' id='ruslanPhoto'/>
                            <span className='authorName'>Ruslan Pidhainyi</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo'/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}