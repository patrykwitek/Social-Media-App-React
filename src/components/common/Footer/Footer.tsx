import './style.scss';
import '../../../style/font.css';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const [translation, i18n] = useTranslation("global");

    return (
        <footer>
            <p>{translation("footerTitle")}</p>
        </footer>
    )
}