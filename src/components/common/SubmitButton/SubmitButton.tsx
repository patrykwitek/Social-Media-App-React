import './style.scss';
import '../../../style/font.css';
import { HiCheckCircle } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';

type SubmitButtonProps = {
    onClick: () => void
}

export const SubmitButton = (props: SubmitButtonProps) => {
    const [translation, i18n] = useTranslation("global");
    
    return (
        <button onClick={props.onClick}>
            {translation("submit")} <HiCheckCircle className='submit-icon' />
        </button>
    )
}