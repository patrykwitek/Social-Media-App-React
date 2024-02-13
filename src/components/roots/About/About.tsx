import './style.scss';
import '../../../style/font.css';
import { useTranslation } from 'react-i18next';
import previewPage from '../../../resources/images/preview.png';
import previewSettingsPage from '../../../resources/images/preview-settings.png';

export const About = () => {
    const [translation, i18n] = useTranslation("global");

    return (
        <div className='aboutPage'>
            <div className='projectInfo'>
                <div className='paragraph'>
                    <h3>{translation("about")}</h3>
                    <p>{translation("aboutPageParagraphOne1")} <a href='https://jsonplaceholder.typicode.com/' target='_blank'>Placeholder API</a> {translation("aboutPageParagraphOne2")}</p>
                    <p>{translation("aboutPageParagraphOne3")}</p>
                    <p>{translation("aboutPageParagraphOne3")}</p>
                    <img src={previewPage} alt={translation("previewPage")} className='page-screen' />
                </div>
                <div className='paragraph'>
                    <h3>{translation("aboutPageParagraphTwoTitle")}</h3>
                    <p>{translation("aboutPageParagraphTwo1")}</p>
                    <p>{translation("aboutPageParagraphTwo2")}</p>
                    <ul className='list'>
                        <li>Bret</li>
                        <li>Antonette</li>
                        <li>Samantha</li>
                        <li>Karianne</li>
                        <li>Kamren</li>
                        <li>Leopoldo_Corkery</li>
                        <li>Elwyn.Skiles</li>
                        <li>Maxime_Nienow</li>
                        <li>Delphine</li>
                        <li>Moriah.Stanton</li>
                    </ul>
                </div>
                <div className='paragraph'>
                    <h3>{translation("aboutPageParagraphThreeTitle")}</h3>
                    <p>{translation("aboutPageParagraphThree1")}</p>
                    <ul className='list'>
                        <li>{translation("aboutPageParagraphThree2")}</li>
                        <li>{translation("aboutPageParagraphThree3")}</li>
                        <li>{translation("aboutPageParagraphThree4")}</li>
                    </ul>
                    <img src={previewSettingsPage} alt={translation("Preview Settings Page")} className='page-screen' />
                </div>
            </div>
            <div className='authors'>
                <h3 className='authorsTitle'>{translation("authors")}</h3>
                <div className='authorsContent'>
                    <a href="https://www.linkedin.com/in/patryk-witek-38272323b/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/patrykwitek.png")} title="Patryk Witek" alt="Patryk Witek" className='authorPicture' id='patrykPhoto' />
                            <span className='authorName'>Patryk Witek</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo' />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/ruslan-pidhainyi/" target="_blank">
                        <div className='authorSection'>
                            <img src={require("../../../resources/images/ruslanpidhainyi.png")} title="Ruslan Pidhainyi" alt="Ruslan Pidhainyi" className='authorPicture' id='ruslanPhoto' />
                            <span className='authorName'>Ruslan Pidhainyi</span>
                            <img src={require("../../../resources/images/linkedin logo.png")} alt="LinkedIn" className='linkedInLogo' />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}