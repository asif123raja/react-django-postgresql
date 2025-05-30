import Form from "../components/Form";
import { Link } from "react-router-dom"; // if you're using React Router

function Login() {
    return (
        <div>
            <Form route="/api/token/" method="login" />
            <p style={{ marginTop: "1rem", textAlign: "center" }}>
                Don't have an account?{" "}
                <Link to="/register">Create one</Link>
            </p>
        </div>
    );
}

export default Login;
