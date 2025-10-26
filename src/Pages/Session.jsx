import Login from "../Components/Session/Login";
import Register from "../Components/Session/Register";
import Logo from "../assets/Imgs/Logo.png";
import { useUser } from "../Hooks/UseContexts";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import "../Styles/Session/Session.css";

function Session() {

    const { User } = useUser();
    const [Option, setOption] = useState("login");

    if (User.Email) {
        return <Navigate to="/" replace />;
    }

    return (
        <>

            {Option === "login" && (
                <div className="session-container">
                    <img src={Logo} alt="Logo" className="session-logo login" />

                    <div className="session-forms login">
                        <Login />

                        <div className="session-btn">

                            <button type="button">
                                Did you forget your password?
                            </button>

                            <button type="button" onClick={() => setOption("register")}>
                                Sign up
                            </button>

                        </div>

                    </div>
                </div>
            )}

            {Option === "register" && (
                <div className="session-container">
                    <div className="register-svg">
                        <svg id="Bold" viewBox="0 0 24 24" width="40" height="40" onClick={() => setOption("login")} className="svg-back"><path d="M4.943,5.606,1.024,9.525a3.585,3.585,0,0,0,0,4.95l3.919,3.919a1.5,1.5,0,1,0,2.121-2.121L4.285,13.492l18.25-.023a1.5,1.5,0,0,0,1.5-1.5v0a1.5,1.5,0,0,0-1.5-1.5L4.3,10.492,7.064,7.727A1.5,1.5,0,0,0,4.943,5.606Z" /></svg>
                        <img src={Logo} alt="Logo" className="session-logo register" />
                    </div>

                    <div className="session-forms register">
                        <Register />
                    </div>
                </div>
            )}

        </>

    );
}

export default Session;