import { useState } from "react";
import { useUser } from "../../Hooks/UseContexts.jsx";
import { Navigate } from "react-router-dom";

const Register = () => {
    const { Usuario, registrarUsuario } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [redirect, setRedirect] = useState(false);

    const handleRegister = (x) => {
        x.preventDefault();

        const usuarios = JSON.parse(localStorage.getItem("Usuarios")) || [];

        if (usuarios.find(x => x.Email === email)) {
            alert("Ya existe una cuenta con ese correo.");
            return;
        }

        const nuevoUsuario = {
            Estado: true,
            Id: Date.now().toString(),
            Rol: "User",
            Usuario: username,
            Email: email,
            Foto: "",
            Ubicacion: "",
            Password: password
        };

        console.log("R1",nuevoUsuario);
        usuarios.push(nuevoUsuario);
        localStorage.setItem("Usuarios", JSON.stringify(usuarios));
        registrarUsuario(nuevoUsuario);
        console.log("R2",Usuario);
        setRedirect(true);
    };

    if (redirect || Usuario.Estado) return <Navigate to="/" />;

    return (
        <form onSubmit={handleRegister}>
            <h2>Registrarse</h2>

            <input type="text" placeholder="Usuario" value={username} onChange={x => setUsername(x.target.value)} required />
            <input type="email" placeholder="Correo" value={email} onChange={x => setEmail(x.target.value)} required />
            <input type="password" placeholder="Contraseña" value={password} onChange={x => setPassword(x.target.value)} required />

            <button type="submit">Register</button>
        </form>
    );
};

export default Register;
