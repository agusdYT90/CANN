import Login from "../Components/Session/Login";
import Register from "../Components/Session/Register";
import { useUser } from "../Hooks/UseContexts";
import { Navigate } from "react-router-dom";
import "../Styles/Session/Session.css";

function Session() {

    const { User } = useUser();

    if (User.Email) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="session-container">
            <Login />
            <Register />
        </div>
    );
}

export default Session;