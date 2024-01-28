
import './style.scss';
import '../../../style/font.css';
import { useTranslation } from 'react-i18next';

export const PageNotFound = () => {
    const [translation, i18n] = useTranslation("global");

    return (
        <div className="pageNotFoundContainer">
            <div className="error-page">
                <h1>{translation("oops")}</h1>
                <p>
                    {translation("pageNotFound")}
                </p>
            </div>
        </div>
    )
}