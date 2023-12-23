import './style.scss';
import '../../../style/font.css';
import { HeaderUserSection } from '../HeaderUserSection/HeaderUserSection';
import { LoginBtn } from '../LoginBtn/LoginBtn';

type GreetingProps = {
    isLoggedIn: boolean
}

function buildGreetingOrLogIn(props: GreetingProps) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <HeaderUserSection userName="Patryk"/>;
    }
    return <LoginBtn/>;
  }

export const Greeting = (props: GreetingProps) => {
    return (
        buildGreetingOrLogIn(props)
    )
}