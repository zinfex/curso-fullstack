import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

function Home() {
  return (
    <>
      <Link to="/login">
        <Button variant="primary">Login</Button>
      </Link>

      <h1>Home</h1>
    </>
  );
}

export default Home;
