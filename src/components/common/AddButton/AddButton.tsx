import './style.scss';
import '../../../style/font.css';
import { LuPlus } from "react-icons/lu";

type AddButtonProps = {
    onClick: () => void
}

export const AddButton = (props: AddButtonProps) => {
    return (
        <div className='add-button-container' onClick={props.onClick} title='Upload new photo'>
            <div className='nav-add-photo'>
                <LuPlus className='icon' />
            </div>
        </div>
    )
}