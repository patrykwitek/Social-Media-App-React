import '../../style/header-section.css';
import '../../style/font.css';

type HeaderSectionProps = {
    name: string
}

export const HeaderSection = (props: HeaderSectionProps) => {
    return (
        <div className="headerSection">
            {props.name}
        </div>
    )
}