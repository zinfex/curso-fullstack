import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function RoutePrivate(props) {

    //Resgatar o logged com usecontext
    const { isLogged } = useContext(AuthContext)

    if (isLogged) {
        return (
            <>
                {props.children}
            </>
        )
    } else {
        return <Navigate to="/login" />;
    }

}

export default RoutePrivate;