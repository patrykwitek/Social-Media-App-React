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
    
    useEffect(() => {
        const displayedModeData = localStorage.getItem('displayMode');

        if (displayedModeData == null) {
            localStorage.setItem('displayMode', JSON.stringify('light'));
        }
    }, []);

    const handleLanguageChange = (event: any) => {
        i18n.changeLanguage(event.target.value);
        const chosenLanguage = i18n.resolvedLanguage ?? 'en';
        setSelectedLanguage(chosenLanguage);
    };

    const handleDisplayModeChange = () => {
        const displayedModeData = localStorage.getItem('displayMode');

        if(JSON.parse(displayedModeData || '') == 'light'){
            localStorage.setItem('displayMode', JSON.stringify('dark'));
        }
        else if(JSON.parse(displayedModeData || '') == 'dark'){
            localStorage.setItem('displayMode', JSON.stringify('light'));
        }

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