import { useState } from "react";
import { useUser } from "../../Hooks/UseContexts";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { AuthenticateUser } = useUser();
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
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
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>

            <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={x => setEmail(x.target.value)}
            required
            />

            <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={x => setPassword(x.target.value)}
            required
            />

            <button type="submit">Log in</button>
        </form>
    );
};

export default Login;
