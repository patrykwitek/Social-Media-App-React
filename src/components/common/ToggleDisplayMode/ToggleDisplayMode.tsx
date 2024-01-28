import './style.scss';
import '../../../style/font.css';

type ToggleDisplayModeProps = {
    mode: string,
    onClick: () => void,
    className?: string
}

export const ToggleDisplayMode = (props: ToggleDisplayModeProps) => {
    return (
        <div className={`display-mode-button ${props.mode} ${props.className}`} onClick={props.onClick}>
            <div className='light-dark-option'></div>
        </div>
    )
}