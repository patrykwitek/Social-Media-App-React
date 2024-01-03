import './style.scss';
import '../../../style/font.css';
import { HiCheckCircle } from "react-icons/hi2";

type SubmitButtonProps = {
    onClick: () => void
}

export const SubmitButton = (props: SubmitButtonProps) => {
    return (
        <button onClick={props.onClick}>
            Submit <HiCheckCircle className='submit-icon' />
        </button>
    )
}