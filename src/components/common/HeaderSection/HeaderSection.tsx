import './style.scss';
import '../../../style/font.css';

type HeaderSectionProps = {
    name: string,
    icon: React.ReactNode
}

export const HeaderSection = (props: HeaderSectionProps) => {
    return (
        <div className="headerSection">
            <span className='icon'>{props.icon}</span>
            <span className='title'>{props.name}</span>
        </div>
    )
}