import Login from "../Components/Session/Login";
import Register from "../Components/Session/Register";
import { useUser } from "../Hooks/UseContexts";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Session/Session.css";

function Session() {

    const { User } = useUser();
    const [option, setOption] = useState("login");

    if (User.Email) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="session-container">
            <div className={`form-wrapper ${option === "login" ? "show-login" : "show-register"}`}>
                {option === "login" && <Login/>}
                {option === "register" && <Register/>}
            </div>

            <div className="session-switch">
                {option === "login" ? (
                    <p>
                        Don't have an account?{" "}
                        <button type="button" onClick={() => setOption("register")}>
                            Sign up
                        </button>
                    </p>
                ) : (
                    <p>
                        Already have an account?{" "}
                        <button type="button" onClick={() => setOption("login")}>
                            Login
                        </button>
                    </p>
                )}
            </div>
        </div>

    );
}

export default Session;