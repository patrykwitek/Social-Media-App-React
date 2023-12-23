import './style.scss';
import '../../../style/font.css';

type DropdownItemProps = {
    img: any,
    text: string
}

export const DropdownItem = (props: DropdownItemProps) => {
    return (
        <div className='dropdown-menu-item'>
            <img src={props.img} alt={props.text} />
            <span>{props.text}</span>
        </div>
    )
}