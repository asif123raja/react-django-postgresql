import Form from "../components/Form";
import { Link } from "react-router-dom"; // make sure you're using React Router

function Register() {
    return (
        <div>
            <Form route="/api/user/register/" method="register" />
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Already have an account?{" "}
                <Link to="/login">Login</Link>
            </p>
        </div>
    );
}

export default Register;
