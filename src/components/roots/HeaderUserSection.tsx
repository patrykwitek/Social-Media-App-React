import '../../style/header-user-section.css';
import '../../style/font.css';

type HeaderUserSectionProps = {
    userName: string
}

export const HeaderUserSection = (props: HeaderUserSectionProps) => {
    return (
        <div className="headerUserSection">
            Welcome <a id="userName">{props.userName}</a>!
        </div>
    )
}