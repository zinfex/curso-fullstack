import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';
import Layout from '../layouts/Layout';
import IndexHome from '../pages/HomePage/IndexHome';

function RoutePrivate(props) {

    const { isLogged } = useContext(AuthContext);

    if(isLogged) {
      return (
        <>
          <Layout>
            {props.children}  
          </Layout>
        </>
      );
    }
  
    return <Navigate to="/login" />;
}

  export default RoutePrivate;