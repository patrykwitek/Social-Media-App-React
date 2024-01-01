import './style.scss';
import '../../../style/font.css';
import { HeaderUserSection } from '../HeaderUserSection/HeaderUserSection';
import { LoginBtn } from '../LoginBtn/LoginBtn';
import { useAuth } from '../../../hooks/Auth/Auth';

export const Greeting = () => {
  const auth = useAuth();

  return (
    !auth.user ? (
      <LoginBtn />
    ) : (
      <HeaderUserSection />
    )
  )
}