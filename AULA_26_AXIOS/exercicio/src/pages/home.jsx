import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home</h1>

            <div id="colum">
                <Link to={'/login'}>Login</Link> <br />
                <Link to={'/usuarios'}>Usuarios</Link>
            </div>
        </>
    )
}

export default Home;