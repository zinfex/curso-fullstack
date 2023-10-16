import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

function Home() {
    return (
        <>
            <h1>HOME</h1>

            <Link to='/login'>
                <Button>Login</Button>
            </Link>
        </>
    )
}

export default Home;