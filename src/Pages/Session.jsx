import Login from "../Components/Session/Login";
import Register from "../Components/Session/Register";
import { useUser } from "../Hooks/UseContexts";
import { Navigate } from "react-router-dom";

function Session() {

    const { User } = useUser();

    if (User.Email) {
        return <Navigate to="/" replace />;
    }

    return (
        <div>
            <Login />
            <Register />
        </div>
    );
}

export default Session;