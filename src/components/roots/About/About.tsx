import './style.scss';
import '../../../style/font.css';
import { useTranslation } from 'react-i18next';

export const About = () => {
    const [translation, i18n] = useTranslation("global");
    
    return (
        <div className='aboutPage'>
            <div className='projectInfo'>
                <h3>That is React Project which uses <a href='https://jsonplaceholder.typicode.com/' target='_blank'>Placeholder API</a> as data. On this page user can log in if exists, watch photos of other users & checks his ToDo'S.</h3>
                <p>TODO: finish with screenshots, description etc. in the future</p>
            </div>
            <div className='authors'>
                <h3 className='authorsTitle'>{translation("authors")}</h3>
                <div className='authorsContent'>
                    <a href="https://www.linkedin.com/in/patryk-witek-38272323b/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/patrykwitek.png")} title="Patryk Witek" alt="Patryk Witek" className='authorPicture' id='patrykPhoto'/>
                            <span className='authorName'>Patryk Witek</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo' />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ruslan-pidhainyi/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/ruslanpidhainyi.png")} title="Ruslan Pidhainyi" alt="Ruslan Pidhainyi" className='authorPicture' id='ruslanPhoto'/>
                            <span className='authorName'>Ruslan Pidhainyi</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo'/>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}