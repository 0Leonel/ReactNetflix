import {useAuth} from '../hooks/useAuth'
import { Navigate } from 'react-router-dom';
const PrivateRoute = ({children}) => {
    const {isLoggeIn} = useAuth();

    if (isLoggeIn) return children;

    return <Navigate to={"/login"}/>

}

export default PrivateRoute;