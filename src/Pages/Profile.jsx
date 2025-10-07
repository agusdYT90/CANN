import LogOut from "../Components/Session/LogOut";
import { useUser } from "../Hooks/UseContexts";

function Profile() {
    const { Usuario } = useUser();

    return (
        <div>
            <h1>Profile Page</h1>
            <LogOut />
            <p>Usuario: {Usuario.Usuario}</p>
            <p>Id: {Usuario.Id}</p>
            <p>Password: {String(Usuario.Password)}</p>
            <p>Email: {Usuario.Email}</p>
            <p>Foto: {Usuario.Foto}</p>
            <p>Ubicacion: {Usuario.Ubicacion}</p>
            <p>Rol: {Usuario.Rol}</p>
            <p>Estado: {String(Usuario.Estado)}</p>
        </div>
    );
}

export default Profile;
