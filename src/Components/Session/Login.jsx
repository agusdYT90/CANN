import { useState } from "react";
import { useUser } from "../../Hooks/UseContexts";
import { Navigate } from "react-router-dom";

const Login = () => {
    const { Usuario, IniciarSesion } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleLogin = (x) => {
        x.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];
        const user = usuarios.find(x => x.Email === email && x.password === password);

        if (!user) {
            alert("Credenciales incorrectas.");
            return;
        }

        const { password: _, ...usuarioSinPassword } = user;
        IniciarSesion({ ...usuarioSinPassword, Estado: true });
        setRedirect(true);
    };

    if (redirect || Usuario.Estado) return <Navigate to="/" />;

    return (
        <form onSubmit={handleLogin}>
            <h2>Iniciar sesión</h2>

            <input type="email" placeholder="Email" value={email} onChange={x => setEmail(x.target.value)} required/>
            <input type="password" placeholder="Password" value={password} onChange={x => setPassword(x.target.value)} required/>

            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
