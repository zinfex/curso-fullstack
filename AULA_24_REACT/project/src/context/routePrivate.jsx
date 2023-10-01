import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './authContext';

function RoutePrivate(props) {

    const { isLogged } = useContext(AuthContext)
    
    if(isLogged) {
        return props.children
    }

    return <Navigate to="/login" />
}

export default RoutePrivate;