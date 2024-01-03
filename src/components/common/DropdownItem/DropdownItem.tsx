import './style.scss';
import '../../../style/font.css';

type DropdownItemProps = {
    img: any,
    text: string,
    onClick: () => void
}

export const DropdownItem = (props: DropdownItemProps) => {
    return (
        <div className='dropdown-menu-item' onClick={props.onClick}>
            <img src={props.img} alt={props.text} />
            <span>{props.text}</span>
        </div>
    )
}