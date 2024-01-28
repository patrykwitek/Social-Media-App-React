import './style.scss';
import '../../../style/font.css';
import { LuPlus } from "react-icons/lu";
import { useTranslation } from 'react-i18next';

type AddButtonProps = {
    onClick: () => void
}

export const AddButton = (props: AddButtonProps) => {
    const [translation, i18n] = useTranslation("global");
    
    return (
        <div className='add-button-container' onClick={props.onClick} title={translation("addBtnTitle")}>
            <div className='nav-add-photo'>
                <LuPlus className='icon' />
            </div>
        </div>
    )
}