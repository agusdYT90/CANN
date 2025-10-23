import { useState } from "react";
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";
import Eye from "../../assets/Svgs/Eye.svg";
import EyeCrossed from "../../assets/Svgs/EyeCrossed.svg";
import "../../Styles/Session/Login.css";

const Login = () => {
    const { AuthenticateUser } = useUser();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ViewPassword, setViewPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (x) => {
        x.preventDefault();

        const Users = JSON.parse(localStorage.getItem("Users")) || [];
        const User = Users.find(x => x.Email === Email && x.Password === Password);

        if (!User) {
            alert("Incorrect credentials.");
            setPassword("");
            setEmail("");
            return
        }

        const { Password: _, ...UserPassword } = User;
        AuthenticateUser({ ...UserPassword });
        navigate("/");
    };

    return (
        <div className="login-container" >
            <form onSubmit={handleSubmit}>
                <h2>Login</h2>

                <div className="login-label">

                    <input
                        id="EmailL"
                        type="email"
                        placeholder=" "
                        value={Email}
                        onChange={x => setEmail(x.target.value)}
                        required
                    />

                    <label htmlFor="EmailL">Email</label>

                </div>

                <div className="login-label">

                    <input
                        id="PasswordL"
                        type={ViewPassword ? 'text' : 'password'}
                        placeholder=" "
                        value={Password}
                        onChange={x => setPassword(x.target.value)}
                        required
                    />

                    <label htmlFor="PasswordL">Password</label>

                    <button
                        className="login-viewbtn"
                        type="button"
                        onClick={() => setViewPassword(!ViewPassword)}
                    >
                        {ViewPassword ?
                            <img src={EyeCrossed} alt="Hide" style={{
                                width: 16,
                                height: 16,
                            }} />
                            :
                            <img src={Eye} alt="View" style={{
                                width: 16,
                                height: 16,
                            }} />}
                    </button>

                </div>

                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
