import './style.scss';
import '../../../style/font.css';
import { useEffect, useState } from 'react';
import { ToggleDisplayMode } from '../../common/ToggleDisplayMode/ToggleDisplayMode';
import { useTranslation } from 'react-i18next';
import { IoSettingsOutline } from 'react-icons/io5';

type SettingsProps = {
    changeDisplayMode: () => void;
}

export const Settings = (props: SettingsProps) => {
    const [translation, i18n] = useTranslation("global");

    const chosenLanguage = i18n.resolvedLanguage ?? 'en';

    const [selectedLanguage, setSelectedLanguage] = useState(chosenLanguage);
    const [displayMode, setDisplayMode] = useState('light');
    
    useEffect(() => {
        const displayedModeData = localStorage.getItem('displayMode');

        if (displayedModeData) {
            try {
                const parsedDisplayModeData = JSON.parse(displayedModeData);
                setDisplayMode(parsedDisplayModeData);
            } catch (error) {
                console.error('Parsing data from local storage error:', error);
            }
        }
    }, []);

    const handleLanguageChange = (event: any) => {
        i18n.changeLanguage(event.target.value);
        const chosenLanguage = i18n.resolvedLanguage ?? 'en';
        setSelectedLanguage(chosenLanguage);
    };

    const handleDisplayModeChange = () => {
        setDisplayMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

        localStorage.setItem('displayMode', JSON.stringify(displayMode));

        props.changeDisplayMode();
    };

    return (
        <div className='settings-page'>
            <div className='settings-container'>
                <h2>
                    {translation("settings")} <IoSettingsOutline className='settings-logo' />
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
                    <ToggleDisplayMode onClick={handleDisplayModeChange} className='toggle' />
                </div>
            </div>
        </div>
    )
}