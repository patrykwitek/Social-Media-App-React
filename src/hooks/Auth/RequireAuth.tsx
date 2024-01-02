import { Navigate} from "react-router-dom";
import { useAuth } from "./Auth"

export const RequireAuth = ({ children }: any) => {
    const auth = useAuth();

    if(!auth.user) {
        return <Navigate to='/not-logged-in'/>
    }

    return children;
}