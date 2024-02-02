import './style.scss';
import '../../../style/font.css';
import { useState } from 'react';
import { ToggleDisplayMode } from '../../common/ToggleDisplayMode/ToggleDisplayMode';
import { useTranslation } from 'react-i18next';
import { IoSettingsOutline } from 'react-icons/io5';

export const Settings = () => {
    const [translation, i18n] = useTranslation("global");

    const chosenLanguage = i18n.resolvedLanguage ?? 'en';

    const [selectedLanguage, setSelectedLanguage] = useState(chosenLanguage);
    const [displayMode, setDisplayMode] = useState('light');

    const handleLanguageChange = (event: any) => {
        i18n.changeLanguage(event.target.value);
        const chosenLanguage = i18n.resolvedLanguage ?? 'en';
        setSelectedLanguage(chosenLanguage);
    };

    const handleDisplayModeChange = () => {
        setDisplayMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    };

    return (
        <div className='settings-page'>
            <div className='settings-container'>
                <h2>
                    {translation("settings")} <IoSettingsOutline className='settings-logo'/>
                </h2>
                <div className='single-option first-option'>
                    {translation("language")}:
                    <select className='choose-language' value={selectedLanguage} onChange={handleLanguageChange}>
                        <option value='en'>English</option>
                        <option value='pl'>Polski</option>
                        <option value='ukr'>Українська</option>
                    </select>
                </div>
                <div className='single-option'>
                    {translation("darkMode")}:
                    <ToggleDisplayMode mode={displayMode} onClick={handleDisplayModeChange} className='toggle' />
                </div>
            </div>
        </div>
    )
}